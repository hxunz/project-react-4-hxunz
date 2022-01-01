import React from 'react';

import {
  Link,
} from 'react-router-dom';

import styled from 'styled-components';

export default function DailyRoutine() {
  return (
    <MenuList>
      <li>
        <Link to="/routine">
          Daily Routine
        </Link>
      </li>
      <li>
        <Link to="/sounds">
          Sounds
        </Link>
      </li>
    </MenuList>
  );
}

const MenuList = styled.ul`
  list-style: none;
`;
