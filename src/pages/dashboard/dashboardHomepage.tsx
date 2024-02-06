import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { api } from "../../store/api";
import { Box } from "@mui/material";
import { MainLayout } from "../../layout";

export function DashboardHomepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <MainLayout />
    // <div className="">
    //   Dashboard Homepage{" "}
    //   <button
    //     onClick={() => {
    //       const environtment = `${import.meta.env.VITE_BASE_ENVIRONTMENT}`;
    //       const url = `${import.meta.env.VITE_BASE_URL}`;
    //       const urlDevelopment = `${
    //         import.meta.env.VITE_BASE_ENVIRONTMENT_URL ?? "localhost"
    //       }`;

    //       const hostname = new URL(url).hostname;
    //       const domainParts = hostname.split(".");
    //       const domainProduction = "." + domainParts.slice(-3).join(".");
    //       const domain =
    //         environtment === "development" ? urlDevelopment : domainProduction;

    //       Cookies.remove("jwtPayload", { domain, path: "/" });
    //       Cookies.remove("jwt", { domain, path: "/" });
    //       dispatch(api.util.resetApiState());
    //       navigate("/login");
    //     }}
    //   >
    //     Logout
    //   </button>
    // </div>
  );
}
