import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
        html {
                box-sizing: border-box;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        
        * {
            padding: 0;
            margin: 0;
        }

        *, *::before, *::after {
                box-sizing: inherit;
        }
        
        ul, li, h1, h2, h3, p, button {
                margin: 0;
        }
        ul {
                list-style: none;
                padding: 0;
        }
        h1 {
                text-align: center;
                margin-top: 20px
        }
        
        button {
                background: transparent;
                border: 0;
                outline: 0;
        }
       
        
`