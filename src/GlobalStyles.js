import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
  }

  body {
    background-color: seagreen;
    background-image: linear-gradient(
      45deg,
      #027551 25%, seagreen 25%,
      seagreen 50%, #027551 50%, #027551 75%,
      seagreen 75%, seagreen 100%
    );
    background-size: 2.83px 2.83px;
    font-family: -apple-system, BlinkMacSystemFont,
      "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyles