import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import DailyRoutineList from './DailyRoutineList';

describe('DailyRoutineList', () => {
  const handleClickDelete = jest.fn();

  function renderList(tasks) {
    return render((
      <DailyRoutineList
        tasks={tasks}
        onClickDelete={handleClickDelete}
      />
    ));
  }

  context('with tasks', () => {
    const tasks = [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ];

    it('renders tasks', () => {
      const { getByText } = renderList(tasks);

      expect(getByText(/Task-1/)).not.toBeNull();
      expect(getByText(/Task-2/)).not.toBeNull();
    });

    it('renders “Done” button to delete a task', () => {
      const { getAllByText } = renderList(tasks);

      const buttons = getAllByText('Done');

      fireEvent.click(buttons[0]);

      expect(handleClickDelete).toBeCalledWith(1);
    });
  });

  context('without tasks', () => {
    it('renders no task message', () => {
      const tasks = [];

      const { getByText } = renderList(tasks);

      expect(getByText(/Add your routine/)).not.toBeNull();
    });
  });
});
