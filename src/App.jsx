import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import DailyRoutine from './DailyRoutine';
import DailyRoutineList from './DailyRoutineList';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={DailyRoutine} />
      <Route path="/DailyRoutineList" component={DailyRoutineList} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
