import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Fab from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import {
  addTask,
  updateTaskTitle,
} from './action';

import DailyRoutineList from './DailyRoutineList';

export default function Form() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(updateTaskTitle(event.target.value));
  };

  const handleSubmit = (event) => {
    dispatch(addTask());
    event.preventDefault();
  };

  return (
    <>
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
      <DailyRoutineList />
    </>
  );
}
