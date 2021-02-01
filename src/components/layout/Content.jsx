import React from "react";
import "./Content.css";
import { Switch, Route } from "react-router-dom";

import Home from "../../views/Home";
import NotFound from "../../views/NotFound";

const Content = (props) => (
  <main className="Content">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </main>
);

export default Content;
