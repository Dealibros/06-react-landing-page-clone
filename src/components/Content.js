import '../App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const main = css`
  max-width: 900px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
  z-index: 99;
  position: relative;
  background-color: #210002;
`;

const description = css`
  text-align: left;
  line-height: 1.6em;
  margin-top: 80px;
  max-width: 740px;
  margin-left: auto;
  margin-right: auto;
  color: #ffaf00;

  h3 {
    font-size: 26px;
    font-weight: 500;
    line-height: 1.5em;
    margin-bottom: 30px;
  }
`;

const columntext = css`
  display: block;

  p {
    font-size: 18px;
    font-weight: 200;
    line-height: 1.6em;
    margin-bottom: 1.6em;
    width: 325px;
    display: inline-block;
  }
`;

const left = css``;

const right = css`
  margin-left: 55px;
`;

const table = css`
  margin-top: 10px;
  margin-bottom: 35px;
  font-size: 0;
  text-align: center;
`;

const ulBanner = css`
  display: inline-block !important;
`;

const liBanner = css`
  margin-bottom: 14px;
  margin-top: 40px;
  list-style: none;
  text-align: center;
`;

const h4 = css`
  color: #210002 !important;
`;

const span = css`
  background-color: #973700 !important;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 2px;
  width: 325px;
  display: block;
  height: 1.6rem;

  background: url(http://www.firewatchgame.com/images/banner_transparent_left.png)
      no-repeat left top / contain,
    url(http://www.firewatchgame.com/images/banner_transparent_right.png)
      no-repeat right top / contain;
`;

function Content() {
  return (
    <div>
      <div css={main}>
        <div css={description}>
          <h3>
            Firewatch is a mystery set in the Wyoming wilderness,
            <br /> where your only emotional lifeline is the person on the{' '}
            <br /> other end of a handheld radio.
          </h3>
          <div css={columntext}>
            <p css={left}>
              "The year is 1989
              <br />
              <br />
              You are a man named Henry who has retreated from your messy life
              to work as a fire lookout in the Wyoming wilderness. Perched atop
              a mountain, it's your job to find smoke and keep the wilderness
              safe.
              <br />
              <br />
              An especially hot, dry summer has everyone on edge. Your
              supervisor, a woman named Delilah, is available to you
              <ul css={ulBanner}>
                <li css={liBanner}>
                  <a>
                    <h4 css={h4}>
                      <span css={span}>SCREENS AND TRAILERS</span>
                    </h4>
                  </a>
                </li>
              </ul>
            </p>

            <p css={right}>
              at all times over a small, handheld radio—and is your only contact
              with the world you've left behind.
              <br />
              <br />
              But when something strange draws you out of your lookout tower and
              into the world below, you'll explore a wild and unknown
              environment, facing questions and making interpersonal choices
              that can build or destroy the only meaningful relationship you
              have.
              <ul css={ulBanner}>
                <li css={liBanner}>
                  <a>
                    <h4 css={h4}>
                      <span css={span}>FIREWATCH FAQ</span>
                    </h4>
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div css={table} />
    </div>
  );
}
export default Content;
