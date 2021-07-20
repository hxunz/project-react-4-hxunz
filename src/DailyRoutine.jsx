import React from 'react';

import {
  Link,
} from 'react-router-dom';

export default function DailyRoutine() {
  return (
    <div>
      <p>
        <Link to="/routine">
          Daily Routine
        </Link>
      </p>
      <p>
        <Link to="/sounds">
          Sounds
        </Link>
      </p>
    </div>
  );
}
