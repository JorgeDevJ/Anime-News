import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root{
    --bg: #09090D;
    --secondary: #353559;
    --primary: #aaaadd;
    --text: #f3f3f4;
    --text-dark: #232240;
    --karla: 'Karla', sans-serif;
    --rubik: 'Rubik', sans-serif;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  
  html{
    font-size: 62.5%;
    font-family: var(--karla);
  }
  body{
    font-size: 16px;
    background-color: var(--bg);
  }
  h1,h2,h3,h4{
    font-family: var(--rubik);
  }
  a{
    text-decoration: none;
    color: #fff;
  }
  img{
    max-width: 100% !important;
    height: auto !important;
    object-fit: contain !important;
  }
`;
