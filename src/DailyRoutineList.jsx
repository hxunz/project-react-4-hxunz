import React from 'react';
import { useSelector } from 'react-redux';

import Item from './Item';

export default function DailyRoutineList({ handleClickDelete }) {
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  if (tasks.length === 0) {
    return (
      <p>Add your routine</p>
    );
  }

  return (
    <ol>
      {tasks.map((task) => (
        <Item key={task.id} task={task} onClickDelete={handleClickDelete} />
      ))}
    </ol>
  );
}
