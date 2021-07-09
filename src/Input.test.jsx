import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const { getByDisplayValue, getByLabelText } = render((
    <Input
      value="Make your routine"
      onChange={handleChange}
      onClick={handleClick}
    />
  ));

  expect(getByDisplayValue('Make your routine')).not.toBeNull();

  fireEvent.change(getByLabelText('Make your routine'), {
    target: { value: 'Do something' },
  });

  expect(handleChange).toBeCalled();
});
