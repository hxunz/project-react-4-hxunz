import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const { getByDisplayValue, getByLabelText, getByText } = render((
    <Input
      value="TODO"
      onChange={handleChange}
      onClick={handleClick}
    />
  ));

  expect(getByDisplayValue('TODO')).not.toBeNull();

  fireEvent.change(getByLabelText('TODO'), {
    target: { value: 'Do something' },
  });

  expect(handleChange).toBeCalled();

  fireEvent.click(getByText('ADD'));

  expect(handleClick).toBeCalled();
});
