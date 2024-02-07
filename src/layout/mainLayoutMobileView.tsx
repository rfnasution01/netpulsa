import { Box, Typography } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import { listMenu } from "../const";

export function MainLayoutMobileView() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Box
      sx={{
        display: { xs: "flex", xl: "none" },
        flexDirection: "column",
        minWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </Box>
      <Box
        sx={{
          p: "28px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {listMenu.map((item, idx) => (
          <Link to={item?.url} key={idx} style={{ flex: 1 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: item?.url === currentPath ? "#35af00" : "#64748b",
                ":hover": {
                  color: "#35af00",
                  cursor: "pointer",
                },
              }}
            >
              {item?.icon}
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                  lineHeight: "130%",
                  letterSpacing: "1px",
                  fontWeight: 500,
                }}
              >
                {item?.name}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
