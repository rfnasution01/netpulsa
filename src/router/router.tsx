import { createBrowserRouter } from "react-router-dom";
import Cookies from "js-cookie";
import {
  CustomerHistory,
  CustomerHomepage,
  DashboardHomepage,
  LoginHomepage,
  SignUpHomepage,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardHomepage />,
    loader: async () => {
      const jwtPayload = Cookies.get("jwtPayload");
      if (!jwtPayload) {
        const environtment = `${import.meta.env.VITE_BASE_ENVIRONTMENT}`;
        const url = `${import.meta.env.VITE_BASE_URL}`;
        const urlDevelopment = `${
          import.meta.env.VITE_BASE_ENVIRONTMENT_URL ?? "localhost"
        }`;

        const hostname = new URL(url).hostname;
        const domainParts = hostname.split(".");
        const domainNotes = "." + domainParts.slice(-3).join(".");
        const domain =
          environtment === "development" ? urlDevelopment : domainNotes;

        window.location.href = "/login";
        Cookies.remove("jwt", { domain, path: "/" });
        Cookies.remove("jwtPayload", { domain, path: "/" });
        return null;
      }
      return null;
    },
    children: [
      {
        path: "",
        element: <DashboardHomepage />,
      },
      {
        path: "/customer",
        children: [
          {
            path: "",
            element: <CustomerHomepage />,
          },
          {
            path: "history",
            element: <CustomerHistory />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginHomepage />,
  },
  {
    path: "/signup",
    element: <SignUpHomepage />,
  },
]);
