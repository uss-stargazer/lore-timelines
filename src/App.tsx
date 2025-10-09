import { BrowserRouter, Route, Routes } from "react-router-dom";
import type { NavbarEntry } from "./components/styled-components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";
import { Info } from "@mui/icons-material";

import Logo from "./components/Logo";
import PageLayout from "./components/styled-components/PageLayout";

import About from "./pages/About";

// Website setup todo list:
//  - Select/generate favicon
//    - Recommended formats/config is demonstrated in `/public/favicon/` and `/index.html`
//    - Cool site to generate: https://favicon.io/favicon-generator/
//  - Customize website theme by editing `theme` below
//    - Recommended theme generator: https://zenoo.github.io/mui-theme-creator/
//    - Recommended font source: https://fonts.google.com/

const navbarEntries: NavbarEntry[] = [
  { name: "About", href: "/", icon: <Info /> },
];

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

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PageLayout
          logo={<Logo fontSizeRem={1.5} />}
          navbarEntries={navbarEntries}
        >
          <Routes>
            <Route path="/" element={<About />} />
          </Routes>
        </PageLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
