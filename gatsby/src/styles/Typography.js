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

  h1 {
    font-size: 70px;

    @media screen and (max-width: 700px) {
      font-size: 40px;
    }
  }

  h2 {
    font-family: 'Barlow', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    margin-top: 8rem;
    margin-bottom: 4rem;
    font-size: 32px;
  }

  p {
    font-size: 20px;
    line-height: 2;
    font-family: 'Roboto', sans-serif;

    @media screen and (max-width: 700px) {
      font-size: 18px;
    }
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