import type { ReactNode } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export interface NavbarEntry {
  name: string;
  href: string;
  icon?: ReactNode;
  description?: string;
}

function Navbar({
  logo,
  navbarEntries,
}: {
  logo: ReactNode;
  navbarEntries: NavbarEntry[];
}) {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {logo}

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "right",
            }}
          >
            {navbarEntries.map((entry) => (
              <Button
                key={entry.name}
                sx={{
                  my: 2,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
                href={entry.href}
              >
                {entry.icon}
                {entry.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
