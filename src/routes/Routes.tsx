import React from "react";
import { Switch, Route } from "react-router-dom";

import ROUTE_NAMES from "./routeNames";

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path={ROUTE_NAMES.ROOT}>
        TODO
      </Route>
      <Route exact path={ROUTE_NAMES.ABOUT}>
        ABOUT
      </Route>
    </Switch>
  );
};
