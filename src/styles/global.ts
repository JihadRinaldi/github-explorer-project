import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root, body, html {
    height: 100%;
  }

  #root {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
  }

  body, button, textarea, input {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;
