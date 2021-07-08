import React from 'react';

export default function Input({ value, onChange, onClick }) {
  return (
    <p>
      <label htmlFor="input-task-title">
        TODO
      </label>
      <input
        id="input-task-title"
        type="text"
        placeholder="Write your routine"
        value={value}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>
        ADD
      </button>
    </p>
  );
}
