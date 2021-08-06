import React, { useEffect, useRef, useState } from 'react';

import { Button } from '@material-ui/core';

const useAudio = (url) => {
  const audio = useRef(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (audio.current) {
      playing ? audio.current.play() : audio.current.pause();
    }
  },
  [playing]);

  useEffect(() => {
    audio.current.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.current.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [toggle];
};

export default function SoundButton({ audioSrc, backgroundImg }) {
  const [toggle] = useAudio(audioSrc);

  const buttonStyle = {
    height: 135,
    width: 500,
    margin: 20,
    justifyContent: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${backgroundImg})`,
  };

  return (
    <Button
      role="button"
      aria-label="play"
      style={buttonStyle}
      onClick={toggle}
    />
  );
}
