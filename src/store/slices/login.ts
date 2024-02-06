import Cookies from "js-cookie";
import { api } from "../api";
import { z } from "zod";
import { jwtDecode } from "jwt-decode";

const LoginResponse = z.object({
  data: z.object({
    token: z.string(),
    expires: z.string(),
  }),
});

type TLoginResponse = z.infer<typeof LoginResponse>;

interface IFormData {
  email: string;
  password: string;
}

const userPayload = z.object({
  email: z.string(),
  namaLengkap: z.string(),
});

const IDecodedTokenPayload = z.object({
  user: userPayload,
  iat: z.number(),
  exp: z.number(),
});

export const getToken = () => {
  if (!Cookies.get("jwtPayload")) window.location.href = "/login";
  const dataPayload = Cookies.get("jwtPayload");

  const payload = userPayload.safeParse(JSON.parse(dataPayload ?? ""));

  if (!payload.success) {
    return {};
  }

  return payload.data;
};

type IDecodedTokenPayload = z.infer<typeof IDecodedTokenPayload>;

const setTokenCookies = (token: string, expires: string) => {
  const decodedToken = jwtDecode<IDecodedTokenPayload>(token);

  const environtment = `${import.meta.env.VITE_BASE_ENVIRONTMENT}`;
  const url = `${import.meta.env.VITE_BASE_URL}`;
  const urlDevelopment = `${
    import.meta.env.VITE_BASE_ENVIRONTMENT_URL ?? "localhost"
  }`;

  const hostname = new URL(url).hostname;
  const domainParts = hostname.split(".");
  const domainNotes = "." + domainParts.slice(-3).join(".");

  const domain = environtment === "development" ? urlDevelopment : domainNotes;

  if (decodedToken) {
    const expirationDate = new Date(expires);
    Cookies.set("jwt", token, { expires: expirationDate, domain, path: "/" });
    Cookies.set("jwtPayload", JSON.stringify(decodedToken.user), {
      expires: expirationDate,
      domain,
      path: "/",
    });
  }
};

export const userApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<TLoginResponse, IFormData>({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const {
            data: {
              data: { token, expires },
            },
          } = await queryFulfilled;

          setTokenCookies(token, expires);
        } catch (error) {
          console.log({ error });
        }
      },
    }),
  }),
});

export const { useLoginMutation } = userApiSlice;
