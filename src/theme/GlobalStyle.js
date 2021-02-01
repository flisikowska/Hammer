import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

*, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html{
    margin: 0;
    font-size: 62,5%;
    position:relative;
}

body{
    height: 100%;
    font-family: "Quicksand";
    margin: 0;
    padding:0;
    font-size: 1.6rem;
}`;

export default GlobalStyle;
