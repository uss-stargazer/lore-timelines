import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { Info } from "@mui/icons-material";
import { IoEarth } from "react-icons/io5";
import { SiStartrek } from "react-icons/si";
import type { NavbarEntry } from "./components/styled/Navbar";

import Logo from "./components/Logo";
import PageLayout from "./components/styled/PageLayout";

import About from "./pages/About";
import { EarthRoutes } from "./pages/Realms/pages/Earth";
import { StarTrekRoutes } from "./pages/Realms/pages/StarTrek";

// Website setup todo list:
//  - Select/generate favicon
//    - Recommended formats/config is demonstrated in `/public/favicon/` and `/index.html`
//    - Cool site to generate: https://favicon.io/favicon-generator/
//  - Customize website theme by editing `theme` below
//    - Recommended theme generator: https://zenoo.github.io/mui-theme-creator/

// Great way to select theme settings:
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#b388ff",
    },
    secondary: {
      main: "#8d6e63",
    },
  },
  typography: {
    fontFamily: "monospace",
    fontSize: 13,
  },
});

const navbarEntries: NavbarEntry[] = [
  { name: "About", href: "/", icon: <Info /> },
  {
    name: "Earth",
    href: "/realms/earth",
    icon: <IoEarth />,
    placement: "realms",
  },
  {
    name: "Star Trek",
    href: "/realms/star-trek",
    icon: <SiStartrek />,
    placement: "realms",
  },
];

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PageLayout
          logo={<Logo fontSizeRem={1.5} randomColor />}
          navbarEntries={navbarEntries}
        >
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/realms">
              {EarthRoutes}
              {StarTrekRoutes}
            </Route>
          </Routes>
        </PageLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
