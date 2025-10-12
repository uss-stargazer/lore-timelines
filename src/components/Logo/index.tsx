import { Box, Typography } from "@mui/material";
import { GiScrollUnfurled } from "react-icons/gi";
import RainbowText from "../styled/RainbowText";
import { Link } from "react-router-dom";

function Logo({
  fontSizeRem,
  randomColor,
}: {
  fontSizeRem: number;
  randomColor?: boolean;
}) {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography
        variant="h6"
        noWrap
        component={Link}
        to="/"
        fontSize={fontSizeRem + "rem"}
        sx={{
          mr: 2,
          display: "flex",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: fontSizeRem * 0.1 + "rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        <GiScrollUnfurled color="#daaa99ff" style={{ margin: "0.24em" }} />
        <RainbowText
          startHue={randomColor ? "random" : 60}
          nRainbowDivisions={20}
          saturation={30}
        >
          Timelines
        </RainbowText>
      </Typography>
    </Box>
  );
}
//
export default Logo;
