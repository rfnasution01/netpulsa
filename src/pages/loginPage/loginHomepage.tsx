import { Box, Grid } from "@mui/material";
import LoginBg from "../../assets/login-bg.jpg";
import { LoginMain } from "../../feature";

export function LoginHomepage() {
  return (
    <Grid container sx={{ minWidth: "100vw", minHeight: "100vh" }}>
      <Grid item xs={12} xl={6}>
        <LoginMain />
      </Grid>
      <Grid
        item
        xs={12}
        xl={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          visibility: {
            xs: "hidden",
            xl: "visible",
          },
        }}
      >
        <Box
          sx={{
            minWidth: "100%",
            minHeight: "100%",
            backgroundImage: `linear-gradient(rgba(0,0,255,0.2), rgba(0,0,255,0.2)), url(${LoginBg})`,
            backgroundSize: "cover",
            backdropFilter: "blur(10px)",
          }}
        />
      </Grid>
    </Grid>
  );
}
