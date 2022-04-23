import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital@1&display=swap');

  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Libre Bodoni', serif;
    transition: all 0.50s linear;
  }
  `
