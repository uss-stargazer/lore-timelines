import { Box } from "@mui/material";
import type { PropsWithChildren } from "react";
import useAppBarHeight from "../../../../hooks/useAppBarHeight";

function FullPageBanner({
  children,
  backgroundColor,
  backgroundImage,
  centerChildren,
}: PropsWithChildren<{
  backgroundColor?: string;
  backgroundImage?: { url: string; static?: boolean; filter?: string };
  centerChildren?: boolean;
}>) {
  const appBarHeight = useAppBarHeight();

  return (
    <Box
      sx={{
        width: "100%",
        height: `calc(100vh - ${appBarHeight}px)`,
        bgcolor: backgroundColor,
        ...(backgroundImage
          ? {
              backgroundImage: `url('${backgroundImage.url}')`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: backgroundImage.static ? "fixed" : "scroll",
              filter: "brightness(70%)",
            }
          : null),
        display: "flex",
        flexDirection: "column",
        ...(centerChildren
          ? { justifyContent: "center", alignItems: "center" }
          : null),
      }}
    >
      {children}
    </Box>
  );
}

export default FullPageBanner;
