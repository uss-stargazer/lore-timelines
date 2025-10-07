import { Box, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

function Logo() {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: "flex",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        <AdbIcon sx={{ display: "flex", mr: 1 }} />
        LOGO
      </Typography>
    </Box>
  );
}

export default Logo;
