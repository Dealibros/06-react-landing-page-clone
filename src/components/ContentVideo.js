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

const videoparent = css`
  width: 100%;
  margin: 50px 0px 0 0;
  margin-right: 0 auto;
  margin-left: 0 auto;
`;

const videochild = css`
  position: relative;
  overflow: hidden;
  iframe {
    overflow: 'hidden';
  }
`;

function ContentVideo() {
  return (
    <div css={main}>
      <div css={videoparent}>
        <div css={videochild}>
          <iframe
            src="https://www.youtube.com/embed/cXWlgP5hZzc"
            width="870"
            height="500"
            title="YouTube video player"
            frameborder="3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  );
}

export default ContentVideo;
