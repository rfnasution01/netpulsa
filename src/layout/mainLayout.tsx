import { Box } from "@mui/material";
import { SidebarMenuList, SidebarTitle } from "../feature";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  const [isShow, setIsShow] = useState<boolean>(true);

  return (
    <Box sx={{ minWidth: "100vw", minHeight: "100vh", display: "flex" }}>
      <Box
        sx={{
          display: {
            xs: "none",
            xl: "flex",
          },
          flexDirection: "column",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
          position: "sticky",
          padding: "0px 30px",
          top: 0,
          left: 0,
          maxHeight: "100vh",
        }}
      >
        <SidebarTitle isShow={isShow} setIsShow={setIsShow} />
        <SidebarMenuList isShow={isShow} />
      </Box>
      <Box sx={{ padding: "20px", flex: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
