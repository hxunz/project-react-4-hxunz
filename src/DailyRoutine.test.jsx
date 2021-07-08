import React from 'react';

import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import DailyRoutine from './DailyRoutine';

describe('DailyRoutine', () => {
  function renderDailyRoutine({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <DailyRoutine />
      </MemoryRouter>
    ));
  }

  context('with path /DailyRoutineList', () => {
    it('renders the DailyRoutineList page', () => {
      const { container } = renderDailyRoutine({ path: '/DailyRoutineList' });

      expect(container).toHaveTextContent('Daily Routine');
    });
  });
});
