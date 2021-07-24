import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import DailyRoutineForm from './DailyRoutineForm';

describe('Input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  context('Make routine', () => {
    const { getByDisplayValue, getByLabelText, getByText } = render((
      <DailyRoutineForm
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

      fireEvent.click(getByText('+'));

      expect(handleClick).toBeCalled();
    });
  });
});
