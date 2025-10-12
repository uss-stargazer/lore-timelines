import {
  createTheme,
  ThemeProvider,
  Typography,
  type Theme,
} from "@mui/material";
import { Route } from "react-router-dom";
import TextPage from "../../../components/styled/text/TextPage";
import FullPageBanner from "../../../components/styled/text/FullPageBanner";

import bannerImage from "./assets/images/banner.jpg";

export const starTrekTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d6a444",
    },
    secondary: {
      main: "#2b53a7",
      dark: "#a71313",
    },
  },
  typography: {
    fontFamily: "monospace",
    fontSize: 14,
  },
});

function StarTrek() {
  return (
    <ThemeProvider theme={starTrekTheme}>
      <TextPage>
        <FullPageBanner
          backgroundImage={{ url: bannerImage, fade: 0.55 }}
          childrenAlignment="center"
        >
          <Typography variant="h6" fontSize="4.8rem">
            <b>Star Trek</b>
          </Typography>
          <Typography variant="h4">Space: The final frontier...</Typography>
        </FullPageBanner>
      </TextPage>
    </ThemeProvider>
  );
}

export const StarTrekRoutes = (
  <Route path="star-trek" element={<StarTrek />}></Route>
);

export default StarTrek;
