import { createBrowserRouter } from "react-router-dom";
import Cookies from "js-cookie";
import {
  CustomerHomepage,
  DashboardHomepage,
  HistoryHomepage,
  LoginHomepage,
  SignUpHomepage,
} from "../pages";
import { MainLayout } from "../layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: async () => {
      const jwtPayload = Cookies.get("jwtPayload");
      if (!jwtPayload) {
        Cookies.remove("jwtPayload", { path: "/" });
        Cookies.remove("jwt", { path: "/" });
        window.location.href = "/login";
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
        path: "/personal",
        element: <CustomerHomepage />,
      },
      {
        path: "/history",
        element: <HistoryHomepage />,
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
