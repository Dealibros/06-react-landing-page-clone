import '../App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

// import sideLeft from '../Imgs/banner_transparent_left.png';
// import sideRight from '../Imgs/banner_transparent_right.png';
const main = css`
  max-width: 800px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
  z-index: 99;
  position: relative;
  background-color: #210002;
`;

const banner = css`
  color: #ffaf00;
  margin-top: 5rem;
  margin-bottom: 1.9rem;
  text-align: center;
  letter-spacing: 10px;
  font-size: 29px;
  font-weight: 300;
`;

const ul = css`
  display: inline-block;
  vertical-align: top;
  width: 335px;
  margin: 0 25px;
  list-style: none;
`;

const liPrice = css`
  display: list-item;
  margin-bottom: 40px;
  background-color: #ffaf00;

  a {
    display: block;
    text-decoration: none;
    color: #210002;
  }

  h4 {
    font-size: 19px;
    letter-spacing: 3px;
    font-weight: 600;
  }
`;

const span = css`
  text-align: center;
  position: background-color 0.15s;
  background: url(http://www.firewatchgame.com/images/banner_transparent_right.png)
      no-repeat top / contain,
    url(http://www.firewatchgame.com/images/banner_transparent_left.png)
      no-repeat right top / contain;
  background-position-x: right, left;
  background-color: #ffaf00;
  display: block;
  padding: 0.2em 0.7em;
  background-clip: padding-box;
  outline: 1px solid #210002;
  transition: background-color 0.15s;

  img {
    background-color: #ffaf00 !important;
    z-index: 100;
    padding-right: 0.7rem !important;
  }
`;

function Pricing() {
  return (
    <div css={main}>
      <div>
        <h2 css={banner}>AVAILABLE NOW FOR $19.99</h2>
      </div>

      <div>
        <ul css={ul}>
          <li css={liPrice}>
            <a href="https://store.steampowered.com/app/383870">
              <h4>
                <span css={span}>
                  <img
                    src="http://www.firewatchgame.com/images/buyicon_pc.png"
                    alt="Laptop"
                    height="20px"
                    width="30px"
                  />
                  WINDOWS MAC LINUX
                </span>
              </h4>
            </a>
          </li>
          <li css={liPrice}>
            <a href="https://store.steampowered.com/app/383870">
              <h4>
                <span css={span}>
                  <img
                    src="	http://www.firewatchgame.com/images/buyicon_ps4.png"
                    alt="Playstation4"
                    height="20px"
                    width="30px"
                  />
                  PLAYSTATION 4
                </span>
              </h4>
            </a>
          </li>
        </ul>
        <ul css={ul}>
          <li css={liPrice}>
            <a href="https://store.steampowered.com/app/383870">
              <h4>
                <span css={span}>
                  <img
                    src="
                    http://www.firewatchgame.com/images/buyicon_switch.png"
                    alt="Nintendo Switch 4"
                    height="20px"
                    width="30px"
                  />
                  NINTENDO SWITCH
                </span>
              </h4>
            </a>
          </li>
          <li css={liPrice}>
            <a href="https://store.steampowered.com/app/383870">
              <h4>
                <span css={span}>
                  <img
                    src="	http://www.firewatchgame.com/images/buyicon_xbone.png"
                    alt="Xbox 1"
                    height="20px"
                    width="30px"
                  />
                  XBOX ONE
                </span>
              </h4>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pricing;
