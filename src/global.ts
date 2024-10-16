import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #640000;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  .thin {
    font-weight: 300;
  }
`
