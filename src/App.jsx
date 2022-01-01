import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom'; // TODO: apply react-router v6

import DailyRoutine from './DailyRoutine';
import DailyRoutineForm from './DailyRoutineForm';
import Sounds from './Sounds';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={DailyRoutine} />
      <Route path="/routine" component={DailyRoutineForm} />
      <Route path="/sounds" component={Sounds} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
