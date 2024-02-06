import { Box, Button, TextField, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export function LoginForm({
  handleSubmit,
  email,
  password,
  setEmail,
  setPassword,
}: {
  handleSubmit: (event: any) => Promise<void>;
  email: string;
  password: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f5f5",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
        minWidth: {
          xl: "30vw",
          xs: "70vw",
        },
        minHeight: {
          xl: "50vh",
          xs: "40vh",
        },
        mb: "60px",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          fontFamily: "sans-serif",
          letterSpacing: "0.1px",
          lineHeight: "130%",
          fontWeight: 600,
          color: "#000",
          textAlign: "center",
          mb: "30px",
        }}
      >
        Form Login
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "70%",
        }}
      >
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="small"
          sx={{ marginBottom: "20px", width: "100%" }}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          size="small"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: "30px", width: "100%" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: "100%" }}
        >
          Login
        </Button>
        <Box sx={{ mt: "20px", textAlign: "left" }}>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "sans-serif",
              letterSpacing: "0.1px",
              lineHeight: "130%",
              fontWeight: 300,
              color: "#555",
            }}
          >
            Belum memiliki akun?{" "}
            <a href="" style={{ color: "blue", cursor: "pointer" }}>
              Daptar
            </a>
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "sans-serif",
              letterSpacing: "0.1px",
              lineHeight: "130%",
              fontWeight: 300,
              color: "#555",
            }}
          >
            Lupa Password?{" "}
            <a href="" style={{ color: "blue", cursor: "pointer" }}>
              Pulihkan
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
