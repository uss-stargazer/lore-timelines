import type { ReactElement } from "react";
import type { RouteElement } from "../../modules/utils";

import { EarthRoutes } from "./Earth";
import { IoEarth } from "react-icons/io5";
import { SiStartrek } from "react-icons/si";
import { StarTrekRoutes } from "./StarTrek";

export interface RealmRecord {
  name: string;
  summary: string;
  icon?: ReactElement;
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
    href: `/realms/${EarthRoutes.props.path}`,
    routes: EarthRoutes,
  },
  {
    name: "Star Trek",
    summary:
      "Aggregated galactic history of a future, according to the Star Trek shows, movies, and writings.",
    icon: <SiStartrek />,
    href: `/realms/${StarTrekRoutes.props.path}`,
    routes: StarTrekRoutes,
  },
];

export default realmRecords;
