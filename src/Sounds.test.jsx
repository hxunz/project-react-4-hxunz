import React from 'react';

import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import Sounds from './Sounds';

describe('Sounds', () => {
  function renderSounds({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <Sounds />
      </MemoryRouter>
    ));
  }

  context('with path /Sounds', () => {
    it('renders the Sounds page', () => {
      const { container } = renderSounds({ path: '/Sounds' });

      expect(container).toHaveTextContent('Sounds');
    });
  });
});
