import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  h1, h2, h3 { 
    color: ${({theme})=> theme.h1};
    transition: all 0.50s linear;

  }

  button {
    background-color: ${({ bgActive, theme }) => bgActive ?  theme.buttonBg : "inherit"};
  }

  header {
    background-color: ${({ theme }) => theme.header};
  }
  `
