import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { Mutex } from "async-mutex";

type metaType = {
  totalItem?: number;
  page?: number;
  limit?: number;
  count?: number;
  q?: string;
};

export interface ObjectPaginated<T> {
  data: { string?: T[] };
  meta: metaType;
}

export interface Res<T> {
  data: T;
  meta?: metaType;
}

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_BASE_URL}`,
  prepareHeaders: (headers) => {
    const token = Cookies.get("jwt");
    headers.set("ngrok-skip-browser-warning", "hehehe");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const mutex = new Mutex();
const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      const environtment = `${import.meta.env.VITE_BASE_ENVIRONTMENT}`;
      const url = `${import.meta.env.VITE_BASE_URL}`;
      const urlDevelopment = `${
        import.meta.env.VITE_BASE_ENVIRONTMENT_URL ?? "localhost"
      }`;

      const hostname = new URL(url).hostname;
      const domainParts = hostname.split(".");
      const domainProduction = "." + domainParts.slice(-3).join(".");
      const domain =
        environtment === "development" ? urlDevelopment : domainProduction;

      try {
        window.location.href = "/login";
        Cookies.remove("jwt", { domain, path: "/" });
        Cookies.remove("jwtPayload", { domain, path: "/" });
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithReAuth,
  tagTypes: ["pasienList"],
  endpoints: () => ({}),
});
