import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Info } from "@mui/icons-material";
import type { NavbarEntry } from "./components/styled/Navbar";

import Logo from "./components/Logo";
import PageLayout from "./components/styled/PageLayout";

import About from "./pages/About";
import realmRecords, { type RealmRecord } from "./pages/Realms/realmRecords";

// Great way to select theme settings:
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#315d83ff",
    },
    secondary: {
      main: "#9944caff",
    },
    grey: { "200": "#141e26ff" },
    background: { default: "#151515ff" },
  },
  typography: {
    fontFamily: "monospace",
    fontSize: 13,
  },
});

const navbarEntries: NavbarEntry[] = [
  { name: "About", href: "/", icon: <Info /> },
  ...realmRecords.map((realm: RealmRecord): NavbarEntry => {
    return {
      name: realm.name,
      href: realm.href,
      icon: realm.icon,
      placement: "realms",
    };
  }),
];

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PageLayout
          logo={<Logo fontSizeRem={1.5} randomColor />}
          navbarEntries={navbarEntries}
        >
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/realms">
              {realmRecords.map((realm: RealmRecord) => realm.routes)}
            </Route>
          </Routes>
        </PageLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
