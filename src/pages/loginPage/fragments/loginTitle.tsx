import { Box, Typography } from "@mui/material";
import Logo from "../../../assets/logo.png";

export function LoginTitle() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "24px",
      }}
    >
      <img src={Logo} alt="Logo" width={45} height={45} />
      <Typography
        sx={{
          fontSize: "20px",
          fontFamily: "sans-serif",
          letterSpacing: "1px",
          lineHeight: "130%",
          fontWeight: 500,
          color: "#000",
          textAlign: "center",
        }}
      >
        NetPulsa
      </Typography>
    </Box>
  );
}
