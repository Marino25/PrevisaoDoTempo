import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

button {
    cursor: pointer;
}

body {
    background: linear-gradient(180deg, rgba(255,127,0,1) 0%, rgba(255,155,0,1) 26%, rgba(255,184,0,1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
}


`;