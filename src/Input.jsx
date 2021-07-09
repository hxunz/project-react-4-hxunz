import React from 'react';

import Fab from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

export default function Input({ value, onChange }) {
  return (
    <p>
      <h1>
        <label htmlFor="input-task-title">
          Make your routine
        </label>
      </h1>
      <input
        id="input-task-title"
        type="text"
        placeholder="Write your routine"
        value={value}
        onChange={onChange}
      />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </p>
  );
}
