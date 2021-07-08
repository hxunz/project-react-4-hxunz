import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import DailyRoutine from './DailyRoutine';
import Input from './Input';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={DailyRoutine} />
      <Route path="/Input" component={Input} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
