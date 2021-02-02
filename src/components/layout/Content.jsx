import React from 'react';
import './Content.css';
import { Switch, Route } from 'react-router-dom';

import Home from '../../views/Home';
import Comics from './Comics';
import Characters from './Characters';
import NotFound from '../../views/NotFound';

const Content = (props) => (
  <main className="Content">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/comics">
        <Comics />
      </Route>
      <Route exact path="/characters">
        <Characters />
      </Route>
      <Route exact path="/favoritos"></Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </main>
);

export default Content;
