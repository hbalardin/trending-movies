import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    width: 100vw;
    height: 100vh;

    background: #230155;
    color: #EBE7F5;
    -webkit-font-smoothing: antialiased;
  }
  h1,h2,h3,h4 {
    font-family: 'Roboto Condensed', sans-serif;
  }
  p, strong {
    font-family: 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
