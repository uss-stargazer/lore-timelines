import type { ReactElement } from "react";
import type { RouteElement } from "../../modules/utils";

import { EarthRoutes, earthTheme } from "./Earth";
import { IoEarth } from "react-icons/io5";
import { SiStartrek } from "react-icons/si";
import { StarTrekRoutes, starTrekTheme } from "./StarTrek";
import type { Theme } from "@mui/material";

export interface RealmRecord {
  name: string;
  summary: string;
  icon?: ReactElement;
  theme: Theme;
  href: string;
  routes: RouteElement;
}

// Note: Try to keep `summary`s around a similar length
const realmRecords: RealmRecord[] = [
  {
    name: "Earth",
    summary:
      "Lore of Earth (aka World History) from the Paleolithic Period to modern day events/people.",
    icon: <IoEarth />,
    theme: earthTheme,
    href: `/realms/${EarthRoutes.props.path}`,
    routes: EarthRoutes,
  },
  {
    name: "Star Trek",
    summary:
      "Aggregated galactic history of a future, according to the Star Trek shows, movies, and writings.",
    icon: <SiStartrek />,
    theme: starTrekTheme,
    href: `/realms/${StarTrekRoutes.props.path}`,
    routes: StarTrekRoutes,
  },
];

export default realmRecords;
