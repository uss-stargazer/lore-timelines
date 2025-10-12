import { Box } from "@mui/material";
import type { PropsWithChildren } from "react";

const defaultMaxWidth = 1300;

function TypographySection({
  children,
  maxWidthPx,
}: PropsWithChildren<{ maxWidthPx?: number }>) {
  return (
    <Box
      sx={{
        maxWidth: maxWidthPx ?? defaultMaxWidth + "px",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "1.5rem",
          gap: "1.5rem",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default TypographySection;
