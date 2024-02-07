import { Box } from "@mui/material";
import { useState } from "react";
import { MainLayoutLabtopView, MainLayoutMobileView } from ".";

export function MainLayout() {
  const [isShow, setIsShow] = useState<boolean>(true);

  return (
    <Box
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
      }}
    >
      <MainLayoutLabtopView setIsShow={setIsShow} isShow={isShow} />
      <MainLayoutMobileView />
    </Box>
  );
}
