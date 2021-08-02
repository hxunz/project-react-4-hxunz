import React from 'react';

import Fab from '@material-ui/core/Button';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ReactAudioPlayer from 'react-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Sounds() {
  const styles = {
    rain: {
      height: 135,
      width: 500,
      margin: 20,
      justifyContent: 'center',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: `url(${'image/rainy.jpg'})`,
    },
    fire: {
      height: 135,
      width: 500,
      margin: 20,
      justifyContent: 'center',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: `url(${'image/fire.jpg'})`,
    },
    ocean: {
      height: 135,
      width: 500,
      margin: 20,
      justifyContent: 'center',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: `url(${'image/ocean.jpg'})`,
    },
    forest: {
      height: 135,
      width: 500,
      margin: 20,
      justifyContent: 'center',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: `url(${'image/forest.jpg'})`,
    },
  };

  return (
    <>
      <Fab
        role="button"
        color="white"
        aria-label="play"
        style={styles.rain}
      >
        <ReactAudioPlayer
          src="sound/rain.mp3"
          autoPlay
          controls
        />
        <PlayCircleOutlineIcon />
      </Fab>
      <Fab
        role="button"
        color="white"
        aria-label="play"
        style={styles.fire}
      >
        <PlayCircleOutlineIcon />
      </Fab>
      <Fab
        role="button"
        color="white"
        aria-label="play"
        style={styles.ocean}
      >
        <PlayCircleOutlineIcon />
      </Fab>
      <Fab
        role="button"
        color="white"
        aria-label="play"
        style={styles.forest}
      >
        <PlayCircleOutlineIcon />
      </Fab>
    </>
  );
}
