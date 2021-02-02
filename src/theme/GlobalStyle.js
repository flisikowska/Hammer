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
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    position:relative;
}

body{
    font-family: "Quicksand";
    margin: 0;
    height: 100vh; 
    height: calc(var(--vh, 1vh) * 100);
    padding:0;
    background-color:black;
    font-size: 1.6rem;

}`;

export default GlobalStyle;
