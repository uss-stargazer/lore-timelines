import { Typography } from "@mui/material";
import { Route } from "react-router-dom";
import TextPage from "../../../components/styled/text/TextPage";
import FullPageBanner from "../../../components/styled/text/FullPageBanner";

import bannerImage from "./assets/images/banner.jpg";

function StarTrek() {
  return (
    <TextPage>
      <FullPageBanner
        backgroundImage={{ url: bannerImage, fade: 0.55 }}
        centerChildren
      >
        <Typography variant="h6" fontSize="4.8rem">
          <b>Star Trek</b>
        </Typography>
        <Typography variant="h4">Space: The final frontier...</Typography>
      </FullPageBanner>
    </TextPage>
  );
}

export const StarTrekRoutes = (
  <Route path="star-trek" element={<StarTrek />}></Route>
);

export default StarTrek;
