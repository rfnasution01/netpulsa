import { Box, Typography } from "@mui/material";
import { listMenu } from "../../const";
import { Link, useLocation } from "react-router-dom";

export function SidebarMenuList({ isShow }: { isShow: boolean }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "20px 8px",
      }}
    >
      {listMenu.map((item, idx) => (
        <Link key={idx} to={item?.url}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "12px",
              alignItems: "center",
              color: item?.url === currentPath ? "#35af00" : "#64748b",
              borderRadius: item?.url === currentPath ? "30px" : "1px",
              padding: isShow ? "16px 32px" : "16px",
              border:
                item?.url === currentPath
                  ? "1px solid #4bcc52"
                  : "1px solid transparent",
              ":hover": {
                color: "#35af00",
                cursor: "pointer",
                borderRadius: "30px",
              },
            }}
          >
            {item?.icon}
            {isShow && (
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "20px",
                  fontWeight: 500,
                  letterSpacing: "2px",
                  lineHeight: "130%",
                }}
              >
                {item?.name}
              </Typography>
            )}
          </Box>
        </Link>
      ))}
    </Box>
  );
}
