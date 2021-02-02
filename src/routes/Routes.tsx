import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../modules/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {/*<Route path="/resume" component={Resume}/>*/}
      {/*<Route path="/projects" component={Projects}/>*/}
    </Switch>
  );
}
