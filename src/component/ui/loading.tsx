import { Box, CircularProgress } from "@mui/material";

export function LoadingComponent() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="primary" size="1.5rem" />
    </Box>
  );
}
