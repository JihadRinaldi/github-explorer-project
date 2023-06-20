import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Dashboard } from "pages/Dashboard";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

