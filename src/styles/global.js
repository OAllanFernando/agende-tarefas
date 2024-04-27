import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        with: 100vw;
        height: 100vh;
        font-family: Arial, Helvetica, sans-serif;
        background-color: #0095ff;
    }
`;

export default GlobalStyle;