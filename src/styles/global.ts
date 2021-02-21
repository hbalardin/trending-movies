import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background: #2c1254;
    color: #EBE7F5;
    -webkit-font-smoothing: antialiased;
  }

  h1,h2,h3,h4, h5, h6 {
    font-family: 'Roboto Condensed', sans-serif;
  }

  p, strong, a, button {
    font-size: 1.6rem;
    color: #EBE7F5;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  .grow:hover {
    transform: translate3d(0, -2px, 0) scale(1.1);
    transition: ease 0.2s;
  }

  .move:hover {
    transform: translate3d(16px, 0, 0);
    transition: ease 0.4s;

    @media (min-width: 425px) {
      transform: translate3d(0, -16px, 0);
    }
  }

  @media (min-width: 768px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
