import '../App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import ImgMain from '../Imgs/Parallax2.jpg';

const picture = css`
  width: 100vw;
  height: 100vh;
`;

function Hero() {
  return <img css={picture} src={ImgMain} alt="mountains" />;
}
export default Hero;
