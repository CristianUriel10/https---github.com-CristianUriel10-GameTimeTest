// Libraries.
import React from "react";
import {
  Routes as Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

// Utils.
import RoutesMap from "./RoutesMap";

// Component to manage URL locations.
const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          {RoutesMap.map((route) => (
            <Route
              exact
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
