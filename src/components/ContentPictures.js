import '../App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const main = css`
  max-width: 1000px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
  z-index: 99;
  position: relative;
  background-color: #210002;
`;

const mainTop = css`
  display: block;
`;

const fourPhotos = css`
  display: block;
  margin-left: 3.5rem;
`;
const photo = css`
  display: inline-block !important;
  width: 44%;
  margin-bottom: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  opacity: 0.85;
  transition: opacity 0.2s;
  margin-right: 2rem;

  li:nth-child(odd) {
    margin-right: 5.5rem !important;
  }
`;

function ContentPictures() {
  return (
    <div css={main}>
      <div css={mainTop}>
        <ul css={fourPhotos}>
          <li css={photo}>
            <a href="screenshots/firewatch-e3-2.jpg">
              <img
                alt="Firewatch screenshot"
                src="http://www.firewatchgame.com/screenshots/thumbs/firewatch_01.jpg"
                height="230rem"
                width="400rem"
              />
            </a>
          </li>
          <li css={photo}>
            <a href="screenshots/firewatch_150305_06.png">
              <img
                alt="Firewatch screenshot"
                src="http://www.firewatchgame.com/screenshots/thumbs/firewatch_02.jpg"
                height="230rem"
                width="400rem"
              />
            </a>
          </li>
          <li css={photo}>
            <a href="screenshots/firewatch-2.jpg">
              <img
                alt="Firewatch screenshot"
                src="http://www.firewatchgame.com/screenshots/thumbs/firewatch_03.jpg"
                height="230rem"
                width="400rem"
              />
            </a>
          </li>
          <li css={photo}>
            <a href="screenshots/firewatch-2.jpg">
              <img
                alt="Firewatch screenshot"
                src="http://www.firewatchgame.com/screenshots/thumbs/firewatch_04.jpg"
                height="230rem"
                width="400rem"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContentPictures;
