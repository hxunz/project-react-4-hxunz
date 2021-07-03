import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import DailyRoutine from './DailyRoutine';

test('DailyRoutine', () => {
  const { getByText } = render((
    <DailyRoutine />
  ));

  fireEvent.click(getByText(/Daily Routine/));
});
