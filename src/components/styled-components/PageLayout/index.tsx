import { Box } from "@mui/material";
import type { PropsWithChildren, ReactNode } from "react";
import Navbar, { type NavbarEntry } from "../Navbar";

function PageLayout({
  logo,
  navbarEntries,
  children,
}: PropsWithChildren<{ logo: ReactNode; navbarEntries: NavbarEntry[] }>) {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar logo={logo} navbarEntries={navbarEntries} />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {children}
      </Box>
    </Box>
  );
}

export default PageLayout;
