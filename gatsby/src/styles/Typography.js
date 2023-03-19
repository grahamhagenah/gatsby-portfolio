import { createGlobalStyle } from 'styled-components';


const Typography = createGlobalStyle`

  html {
    font-family: 'Barlow', -apple-system, BlinkMacSystemFont, sans-serif;
    color: var(--black);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    margin: 0;
  }

  h2 {
    font-weight: 600;
    font-size: 36px;
  }

  p {
    font-size: 18px;
    line-height: 2;
  }

  .read-more-link {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 15px;
    -webkit-letter-spacing: 0.5px;
    -moz-letter-spacing: 0.5px;
    -ms-letter-spacing: 0.5px;
    letter-spacing: 0.5px;
    display: inline;
  }

`;

export default Typography;