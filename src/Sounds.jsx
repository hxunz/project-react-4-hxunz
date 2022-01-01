import React from 'react';

import styled from 'styled-components';
import SoundButton from './SoundButton';

export default function Sounds() {
  return (
    <SoundsContainer>
      <ButtonWrapper>
        <SoundButton audioSrc="sound/rain.mp3" backgroundImg="image/rainy.jpg" />
        <SoundButton audioSrc="sound/bonfire.mp3" backgroundImg="image/fire.jpg" />
        <SoundButton audioSrc="sound/wave.mp3" backgroundImg="image/ocean.jpg" />
        <SoundButton audioSrc="sound/forest.mp3" backgroundImg="image/forest.jpg" />
      </ButtonWrapper>
    </SoundsContainer>
  );
}

const SoundsContainer = styled.article`
  background-color: gainsboro;
  width: 550px;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
