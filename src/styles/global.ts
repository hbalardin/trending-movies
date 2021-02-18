import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body, #root {
    width: 100vw;
    height: 100vh;

    background: #1e073f;
    -webkit-font-smoothing: antialiased;
  }
  h1,h2,h3,h4 {
    color: #EBE7F5;
    font-family: 'Roboto Condensed', sans-serif;
  }
  p, strong, a {
    color: #EBE7F5;
    font-family: 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
