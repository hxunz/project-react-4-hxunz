import React from 'react';

import SoundButton from './SoundButton';

export default function Sounds() {
  return (
    <div style={{
      backgroundImage: `url(${'image/nature.gif'})`,
      backgroundRepeat: 'round',
    }}
    >
      <article style={{
        backgroundColor: 'gainsboro',
        width: 550,
        margin: '0 auto',
      }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <SoundButton audioSrc="sound/rain.mp3" backgroundImg="image/rainy.jpg" />
          <SoundButton audioSrc="sound/bonfire.mp3" backgroundImg="image/fire.jpg" />
          <SoundButton audioSrc="sound/wave.mp3" backgroundImg="image/ocean.jpg" />
          <SoundButton audioSrc="sound/forest.wav" backgroundImg="image/forest.jpg" />
        </div>
      </article>
    </div>
  );
}
