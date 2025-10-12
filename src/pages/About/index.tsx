import { Box, Typography } from "@mui/material";
import Logo from "../../components/Logo";
import TextPage from "../../components/styled/text/TextPage";
import FullPageBanner from "../../components/styled/text/FullPageBanner";
import TypographySection from "../../components/styled/text/TypographySection";

function About() {
  return (
    <TextPage>
      <FullPageBanner backgroundColor="grey.200" centerChildren>
        <Box sx={{ margin: "0 auto" }}>
          <Logo fontSizeRem={4.8} />
        </Box>
        <Typography variant="h4">
          Rich historical timelines of <br /> different realms.
        </Typography>
      </FullPageBanner>
      <TypographySection>
        <Typography variant="h3">Realms:</Typography>
      </TypographySection>
    </TextPage>
  );
}

export default About;
