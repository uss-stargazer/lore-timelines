import { Box, Typography } from "@mui/material";
import Logo from "../../components/Logo";

function About() {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Typography variant="h4">This is the About page.</Typography>
        <Box sx={{ margin: "0 auto", scale: 3 }}>
          <br />
          <Logo fontSizeRem={1.6} />
          <br />
        </Box>
        <Typography variant="h4">Welcome.</Typography>
      </Box>
    </Box>
  );
}

export default About;
