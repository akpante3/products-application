import React from "react";
import Home from '../component'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

/**
 * @description Routes list
 * @returns {object} the component
 */
const Routes = () => ( 
  <Switch>
      <Route name="home" path='/' component={Home} />
  </Switch>
);

export default Routes;