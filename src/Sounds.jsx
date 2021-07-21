import React from 'react';

import Fab from '@material-ui/core/Button';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

export default function Sounds() {
  return (
    <>
      <Fab role="button" color="primary" aria-label="play">
        <PlayCircleOutlineIcon />
      </Fab>
    </>
  );
}
