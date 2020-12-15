import React from "react";
import { Switch, Route } from "react-router-dom";

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/">
        TODO
      </Route>
      <Route exact path="/about">
        ABOUT
      </Route>
    </Switch>
  );
};
