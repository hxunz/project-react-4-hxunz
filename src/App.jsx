import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import DailyRoutine from './DailyRoutine';
import Form from './Form';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={DailyRoutine} />
      <Route path="/Form" component={Form} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
