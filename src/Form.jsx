import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Fab from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import {
  addTask,
  updateTaskTitle,
} from './action';

export default function Form() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  const dispatch = useDispatch();

  const [task, setTask] = useState('');

  const handleChange = (event) => {
    console.log('event', event.target.value);
    setTask(event.target.value);
    dispatch(updateTaskTitle(event.target.value));
  };

  const handleSubmit = (event) => {
    console.log(task);
    // TODO: update taks list store
    event.preventDefault();
    dispatch(addTask());
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>
        <label htmlFor="input-task-title">
          Make your routine
        </label>
      </h1>
      <input
        id="input-task-title"
        type="text"
        placeholder="Write your routine"
        value={taskTitle}
        onChange={handleChange}
      />
      <Fab role="button" color="primary" aria-label="add" type="submit" value="Submit">
        <AddIcon />
      </Fab>
    </form>
  );
}
