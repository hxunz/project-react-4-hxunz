import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Form from './Form';

describe('Input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  context('Make routine', () => {
    const { getByDisplayValue, getByLabelText } = render((
      <Form
        value="Make your routine"
        onChange={handleChange}
        onClick={handleClick}
      />
    ));

    it('render routine', () => {
      expect(getByDisplayValue('Make your routine')).not.toBeNull();

      fireEvent.change(getByLabelText('Make your routine'), {
        target: { value: 'Do something' },
      });

      expect(handleChange).toBeCalled();
    });
  });
});
