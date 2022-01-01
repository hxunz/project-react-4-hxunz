import React from 'react';

import { useDispatch } from 'react-redux';

import {
  deleteTask,
} from './action';

export default function Item({ task }) {
  const { id, title } = task;
  const dispatch = useDispatch();

  const handleClickDelete = () => {
    dispatch(deleteTask(id));
  };

  return (
    <li>
      {title}
      <button
        type="button"
        onClick={handleClickDelete}
      >
        Done
      </button>
    </li>
  );
}
