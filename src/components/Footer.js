import '../App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const main = css`
  text-align: center;

  max-width: 900px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
  z-index: 99;
  position: relative;
  background-color: #210002;

  h2 {
    margin-top: 1.5rem;
    color: #ffaf00;
    font-size: 38px;
    letter-spacing: 3px;
    font-weight: 300;
    font-size: 2.5rem;
  }

  h3 {
    margin-bottom: 50px;
    font-size: 19px;
    letter-spacing: 4px;
    color: #973700;
    margin-top: 0.6rem;
    font-weight: 500;
  }

  li {
    list-style: none;
  }

  ul {
    height: 68px;
    background-image: url(http://www.firewatchgame.com/images/firewatch_shield_small.png);
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center top;
    margin-left: -40px;
    margin-right: 0px;
  }
`;

const ulFooter = css`
  display: inline-block;
`;

const liFooter = css`
  margin: 40px 40px 14px 40px;
  list-style: none;
  text-align: center;
  display: inline-block;
  text-transform: uppercase;

  a {
    text-decoration: none;
  }
`;

const h4Footer = css`
  color: #210002 !important;
`;

const spanFooter = css`
  background-color: #973700 !important;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 2px;
  width: 325px;
  display: block;
  height: 1.6rem;
  margin-bottom: 20px;

  background: url(http://www.firewatchgame.com/images/banner_transparent_left.png)
      no-repeat left top / contain,
    url(http://www.firewatchgame.com/images/banner_transparent_right.png)
      no-repeat right top / contain;
`;

const japaneseBlock = css`
  color: #ffaf00;
  margin-top: 40px;

  a {
    font-size: 1.7rem;
    font-weight: 700;
    text-decoration: none;
    color: #ffaf00;
  }
`;

const lastP = css`
  text-transform: uppercase;
  font-size: 1.1rem;
  color: #973700;
  margin: 40px 0 40px 0;
  letter-spacing: 0.5px;
  font-weight: 300;
`;

function Footer() {
  return (
    <div css={main}>
      <div>
        <h2>
          "AS VISUALLY STRIKING" <br />
          "AS ITS UNIQUE PREMISE."
        </h2>
        <h3>ENTERTAINMENT WEEKLY</h3>
      </div>

      <div>
        <ul css={ulFooter}>
          <li css={liFooter}>
            <a href="https://library.panic.com/firewatch/">
              <h4 css={h4Footer}>
                <span css={spanFooter}>Tech Support</span>
              </h4>
            </a>
          </li>
          <li css={liFooter}>
            <a href="about#streaming">
              <h4 css={h4Footer}>
                <span css={spanFooter}>Streaming &amp; Let's Plays</span>
              </h4>
            </a>
          </li>
        </ul>
      </div>

      <div css={japaneseBlock}>
        <a href="jp/">日本語に関する情報</a>
      </div>

      <div css={lastP}>
        <p>
          <span>@2021</span>
          Campo Santo, in cooperation with Panic.
        </p>
        <p>Firewatch is a trademark of Campo Santo.</p>
        <p>Nintendo Switch is a trademark of Nintendo</p>
      </div>
    </div>
  );
}

export default Footer;

// <div class="section companylinks">
//   <ul class="companies">
//     <li class="campo">
//       <a href="http://www.camposanto.com/">
//         <h1>Campo Santo</h1>
//       </a>
//     </li>
//     <li class="panic">
//       <a href="https://www.panic.com">
//         <h1>Panic</h1>
//       </a>
//     </li>
//   </ul>
// </div>
