import { css, Global } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          /* box-sizing: border-box; */
          background-color: #210002;
          margin: 0;
          padding: 0;
          /* border: 0; */
          /* font: inherit; */
          vertical-align: top;
        }

        @font-face {
          font-family: 'Verlag Bold';
          src: local('Verlag Bold'), 'url(./components/Fonts/Verlag Bold.ttf)',
            format('truetype');
        }
      `}

      //   /* other formats include: 'woff2', 'truetype, 'opentype',
      //                             'embedded-opentype', and 'svg' */
      // }
    />
  );
};

export default GlobalStyles;
