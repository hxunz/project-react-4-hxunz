import React from 'react';

import Item from './Item';

export default function DailyRoutineList({ tasks, onClickDelete }) {
  if (tasks.length === 0) {
    return (
      <p>Add your routine</p>
    );
  }

  return (
    <ol>
      {tasks.map((task) => (
        <Item key={task.id} task={task} onClickDelete={onClickDelete} />
      ))}
    </ol>
  );
}
