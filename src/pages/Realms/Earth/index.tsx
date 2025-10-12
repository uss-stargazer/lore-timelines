import { Route } from "react-router-dom";
import TextPage from "../../../components/styled/text/TextPage";
import { Typography } from "@mui/material";
import FullPageBanner from "../../../components/styled/text/FullPageBanner";

import bannerImage from "./assets/images/banner.jpg";

function Earth() {
  return (
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
  );
}

export const EarthRoutes = <Route path="earth" element={<Earth />}></Route>;

export default Earth;
