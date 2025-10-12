import { Route } from "react-router-dom";
import TextPage from "../../../components/styled/text/TextPage";
import type { RouteElement } from "../../../modules/utils";
import {
  createTheme,
  ThemeProvider,
  Typography,
  type Theme,
} from "@mui/material";
import FullPageBanner from "../../../components/styled/text/FullPageBanner";

import bannerImage from "./assets/images/banner.jpg";

export const earthTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1e9111ff",
    },
    secondary: {
      main: "#2d55abff",
    },
  },
  typography: {
    fontFamily: "monospace",
    fontSize: 14,
  },
});

function Earth() {
  return (
    <ThemeProvider theme={earthTheme}>
      <TextPage>
        <FullPageBanner
          backgroundImage={{ url: bannerImage, fade: 0.55 }}
          childrenAlignment="center"
        >
          <Typography variant="h6" fontSize="4.8rem">
            <b>Earth</b>
          </Typography>
          <Typography variant="h4">also known as World History</Typography>
        </FullPageBanner>
      </TextPage>
    </ThemeProvider>
  );
}

export const EarthRoutes: RouteElement = (
  <Route path="earth" element={<Earth />}></Route>
);

export default Earth;
