import { Box, Typography } from "@mui/material";

function RealmBanner({
  realm,
  description,
  image,
}: {
  realm: string;
  description: string;
  image: {
    path: string;
    description: string;
  };
}) {
  return (
    <Box
      sx={{
        backgroundImage: `url('${image.path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(70%)",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Typography variant="h2">{realm}</Typography>
          <Typography variant="body1">{description}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default RealmBanner;
