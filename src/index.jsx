import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
} from 'react-router-dom';

import DailyRoutine from './DailyRoutine';

ReactDOM.render(
  (
    <BrowserRouter>
      <DailyRoutine />
    </BrowserRouter>
  ),
  document.getElementById('app'),
);
