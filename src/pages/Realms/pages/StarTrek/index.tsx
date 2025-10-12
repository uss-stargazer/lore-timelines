import { Box } from "@mui/material";
import { Route } from "react-router-dom";

import bannerImage from "./assets/images/banner.jpg";
import RealmBanner from "../../components/RealmBanner";

function StarTrek() {
  return (
    <Box>
      <RealmBanner
        realm="Star Trek"
        description={`Star Trek realm description.`}
        image={{
          path: bannerImage,
          description: "USS Enterprise (NCC-1701-D) from The Next Generation",
        }}
      />
    </Box>
  );
}

export const StarTrekRoutes = (
  <Route path="star-trek" element={<StarTrek />}></Route>
);

export default StarTrek;
