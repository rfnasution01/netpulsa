import { Box, IconButton, Typography } from "@mui/material";
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
        paddingY: "28px",
        gap: isShow ? "36px" : "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
        }}
      >
        <img src={Logo} alt="NetPulsa" width={45} height={45} />
        {isShow && (
          <Typography
            sx={{
              fontFamily: "fantasy",
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "2px",
              color: "#0f172a",
            }}
          >
            NETPULSA
          </Typography>
        )}
      </Box>
      <IconButton
        sx={{
          cursor: "pointer",
          ":hover": { color: "#64748b" },
          margin: 0,
          padding: 0,
        }}
        onClick={() => setIsShow(!isShow)}
      >
        {isShow ? <MoreVertical /> : <MoreHorizontal />}
      </IconButton>
    </Box>
  );
}
