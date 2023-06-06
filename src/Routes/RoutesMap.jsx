// Libraries.
import React from "react";

// Pages.
import SearchPage from "../Pages/Search/Search";
// Shared.
import { pathSearch } from "./Types/Routes.types";

/**
 * This list of Objects allows to manipulate the routes to the pages that exist within the application.
 */
const Routes = [
  {
    path: "",
    component: <SearchPage />,
  },
  {
    path: `${pathSearch}`,
    component: <SearchPage />,
  },
];

export default Routes;
