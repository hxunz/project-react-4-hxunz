import React from 'react';

import { useDispatch } from 'react-redux';

import {
  deleteTask,
} from './action';

export default function Item({ task }) {
  const dispatch = useDispatch();

  const handleClickDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li>
      {task.title}
      <button
        type="button"
        onClick={() => handleClickDelete(task.id)}
      >
        Done
      </button>
    </li>
  );
}
