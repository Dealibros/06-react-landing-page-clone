/** @jsxImportSource @emotion/react */
import '../App.css';
import { css } from '@emotion/react';

const navStyles = css`
  height: 36px;
  background-color: #210002;
  color: red;

  ul {
    list-style: none;
    position: absolute;
    top: 0;
    width: 100%;
    text-align: left;
    font-family: 'futura-pt';
    padding: 0;
    float: left;
  }

  li {
    color: #ffaf00;
    font-family: Arial, 'Verlag Bold';
    font-weight: 700;
    font-style: normal;
    text-align: center;
    font-size: 14px;
    vertical-align: top;
    margin: 0 0 0 0.2rem;
    padding: 0.6rem 0.3rem 0.4rem 0.8rem;
  }
`;

const right = css`
  float: right;
`;
const left = css`
  float: left;
`;

function Header() {
  return (
    <nav css={navStyles}>
      <ul>
        <li css={left}>CAMPO SANTO</li>
        <li css={right}>QUARTELY REVIEW</li>
        <li css={right}>DEVELOPMENT BLOG</li>
        <li css={right}>FIREWATCH</li>
      </ul>
    </nav>
  );
}

export default Header;
