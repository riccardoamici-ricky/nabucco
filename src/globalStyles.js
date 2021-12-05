import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    html, body {
        overflow-x: hidden;
    }

    h1 {
        font-family: 'DM Serif Display', serif;
    }

    p {
        white-space: pre-line;
    }
`

export default GlobalStyle;