import { Box, Button, Grid } from "@mui/material";
import Logo from "../../assets/logo.png";

export function CustomerHomepage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: "100%",
        minHeight: "100%",
      }}
    >
      <Grid container spacing={8}>
        <Grid item xl={4}>
          <Box sx={{ minHeight: "400px", minWidth: "400px" }}>
            <Box
              sx={{
                minHeight: "400px",
                minWidth: "400px",
                borderRadius: "50%",
                border: "1px solid #f5f5f5",
                bgcolor: "#f0f0f0",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <img
                src={Logo}
                alt="Photo Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: "30px",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: "40%" }}
              >
                Change Photo
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xl={8}>
          <Box sx={{ bgcolor: "darkkhaki" }}>xs=4</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
