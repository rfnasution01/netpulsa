import { Box, Button, Typography } from "@mui/material";
import { listMenu } from "../../const";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { api } from "../../store/api";
import { LogOut } from "lucide-react";

export function SidebarMenuList({ isShow }: { isShow: boolean }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "20px 0px",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: isShow ? "start" : "center",
          justifyContent: "center",
          gap: "28px",
        }}
      >
        {listMenu.map((item, idx) => (
          <Link key={idx} to={item?.url}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                alignItems: "center",
                color: item?.url === currentPath ? "#35af00" : "#64748b",
                borderRadius: item?.url === currentPath ? "30px" : "1px",
                ":hover": {
                  color: "#35af00",
                  cursor: "pointer",
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
      <Button
        type="button"
        variant="contained"
        color="error"
        sx={{ width: "100%" }}
        onClick={() => {
          Cookies.remove("jwtPayload", { path: "/" });
          Cookies.remove("jwt", { path: "/" });
          dispatch(api.util.resetApiState());
          navigate("/login");
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", gap: "8px", py: "4px" }}
        >
          <LogOut />
          {isShow && <Typography>Logout</Typography>}
        </Box>
      </Button>
    </Box>
  );
}
