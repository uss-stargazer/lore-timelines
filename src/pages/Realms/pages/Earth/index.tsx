import { Box } from "@mui/material";
import { Route } from "react-router-dom";

import bannerImage from "./assets/images/banner.jpg";
import RealmBanner from "../../components/RealmBanner";

function Earth() {
  return (
    <Box>
      <RealmBanner
        realm="Earth"
        description={`Overview of Earth's lore (also known as world history). This timeline 
                      aggregates interesting topics that I've researched through Afro-Eurasia 
                      and the Americas.`}
        image={{
          path: bannerImage,
          description: `A world map part of what's considered the first true atlas (Theatrum 
                        Orbis Terrarum by Abraham Orteliush).`,
        }}
      />
    </Box>
  );
}

export const EarthRoutes = (
  <Route path="earth" element={<Earth />}>
  </Route>
);

export default Earth;
