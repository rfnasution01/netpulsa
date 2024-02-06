import { Box, Typography } from "@mui/material";
import Logo from "../../assets/logo.png";
import { Dispatch, SetStateAction } from "react";
import { MoreHorizontal, MoreVertical } from "lucide-react";

export function SidebarTitle({
  isShow,
  setIsShow,
}: {
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isShow ? "row" : "column",
        alignItems: "center",
        justifyContent: isShow ? "space-between" : "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          mb: "16px",
        }}
      >
        <img src={Logo} alt="NetPulsa" width={45} height={45} />
        {isShow && (
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "130%",
              letterSpacing: "1px",
              color: "#0f172a",
            }}
          >
            NetPulsa
          </Typography>
        )}
      </Box>
      <Box
        sx={{ cursor: "pointer", ":hover": { color: "#64748b" } }}
        onClick={() => setIsShow(!isShow)}
      >
        {isShow ? <MoreVertical /> : <MoreHorizontal />}
      </Box>
    </Box>
  );
}
