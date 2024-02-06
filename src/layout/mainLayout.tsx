import { Box, Grid } from "@mui/material";
import { SidebarTitle } from "../feature";
import { useState } from "react";

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
          padding: "20px",
        }}
      >
        <SidebarTitle isShow={isShow} setIsShow={setIsShow} />
        <Box sx={{ flex: 1, bgcolor: "yellow" }}>
          {isShow && "Lorem ipsum dolor sit amet"}
        </Box>
      </Box>
      <Box sx={{ padding: "20px", flex: 1 }}>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
        </h1>
      </Box>
    </Box>
  );
}
