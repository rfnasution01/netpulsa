import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { capitalizeWords, splitPath } from "../../utils";

export function ContentBreadcrumb() {
  const location = useLocation();
  const currentPath = location.pathname;
  const pathArray = splitPath(currentPath);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        gap: "4px",
      }}
    >
      <Link to="/">
        <Typography
          sx={{
            fontFamily: "serif",
            fontWeight: 400,
            fontSize: "20px",
            letterSpacing: "1px",
            lineHeight: "130%",
            color: "#0f172a",
            ":hover": {
              color: "#35af00",
            },
          }}
        >
          Home
        </Typography>
      </Link>
      {pathArray.map((item, idx) => (
        <Box
          key={idx}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "4px",
            alignItems: "center",
          }}
        >
          {idx < pathArray.length && (
            <Typography
              sx={{
                fontFamily: "serif",
                fontWeight: 400,
                fontSize: "20px",
                letterSpacing: "1px",
                lineHeight: "130%",
                color: "#64748b",
              }}
            >
              /
            </Typography>
          )}
          <Link to={`/${item}`}>
            <Typography
              sx={{
                fontFamily: "serif",
                fontWeight: 400,
                fontSize: "20px",
                letterSpacing: "1px",
                lineHeight: "130%",
                color: "#64748b",
              }}
            >
              {capitalizeWords(item)}
            </Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
}
