import { useState, type ReactElement, type ReactNode } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";

export interface NavbarEntry {
  name: string;
  href: string;
  icon?: ReactNode;
  description?: string;
  placement?: "bar" | "menu" | string | ReactElement; // Defining custom will add to menu under button of the name/icon
}

function NavbarDropdown({
  label,
  entries,
}: {
  label: string | ReactElement;
  entries: NavbarEntry[];
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const toggleDropdown = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeDropdown = () => setAnchorEl(null);

  return (
    <Box sx={{ alignSelf: "center" }}>
      <Button onClick={toggleDropdown} variant="contained" sx={{ gap: "10px" }}>
        {label}
        {isOpen ? <ExpandMore /> : <ExpandLess />}
      </Button>
      <Menu
        sx={{ mt: "45px" }}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={closeDropdown}
        onClick={closeDropdown}
        keepMounted
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {entries.map((entry: NavbarEntry) => (
          <MenuItem
            component={Link}
            to={entry.href}
            sx={{ gap: "1em", fontSize: "1.2em" }}
          >
            {entry.icon}
            <Typography fontSize="inherit" sx={{ textAlign: "center" }}>
              {entry.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

function Navbar({
  logo,
  navbarEntries,
}: {
  logo: ReactNode;
  navbarEntries: NavbarEntry[];
}) {
  const navbarBarEntries: NavbarEntry[] = [];
  const navbarMenuEntries: NavbarEntry[] = [];
  const navbarGroups: Map<string | ReactElement, NavbarEntry[]> = new Map();
  navbarEntries.forEach((entry: NavbarEntry) => {
    switch (entry.placement ?? "bar") {
      case "bar":
        navbarBarEntries.push(entry);
        break;
      case "menu":
        navbarMenuEntries.push(entry);
        break;
      default:
        if (!navbarGroups.has(entry.placement!))
          navbarGroups.set(entry.placement!, [entry]);
        else navbarGroups.get(entry.placement!)?.push(entry);
    }
  });

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {logo}

          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            {/* Normal entries directly on navbar */}
            {navbarBarEntries.map((entry) => (
              <Button
                key={entry.name}
                variant="outlined"
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
                <Typography sx={{ textAlign: "center" }}>
                  {entry.name}
                </Typography>
              </Button>
            ))}

            {/* Custom group menus */}
            {navbarGroups.size > 0 &&
              [...navbarGroups.keys()].map((group: string | ReactElement) => {
                const label =
                  typeof group === "string" ? (
                    <Typography>{group}</Typography>
                  ) : (
                    <Box
                      sx={{
                        sy: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      {group}
                    </Box>
                  );
                return (
                  <NavbarDropdown
                    label={label}
                    entries={navbarGroups.get(group)!}
                  />
                );
              })}

            {/* Hamburger menu */}
            {navbarMenuEntries.length > 0 && (
              <NavbarDropdown
                label={
                  <IconButton size="large" color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                }
                entries={navbarMenuEntries}
              />
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
