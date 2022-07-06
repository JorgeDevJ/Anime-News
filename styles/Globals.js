import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root{
    --bg: #FDFDFD;
    --secondary: #2D2D4E;
    --primary: #9A9AEA;
    --text: #FDFDFD;
    --text-dark: #2D2D4E;
    --color-medium: #888899;
    --karla: 'Karla', sans-serif;
    --rubik: 'Rubik', sans-serif;
    --padding-separate-lr: 2rem;
    --margin-separate: 0 2rem;
    --border: 15px;
    --border-mobile: 10px;
    --shadow-card: 0px 500px 449px rgba(0, 0, 0, 0.1), 0px 208.888px 187.581px rgba(0, 0, 0, 0.0718854), 0px 111.682px 100.29px rgba(0, 0, 0, 0.0596107), 0px 62.6078px 56.2218px rgba(0, 0, 0, 0.05), 0px 33.2505px 29.859px rgba(0, 0, 0, 0.0403893), 0px 13.8363px 12.425px rgba(0, 0, 0, 0.0281146);
    --shadow-cat: 0px 14px 239px rgba(0, 0, 0, 0.13), 0px 6.47262px 110.497px rgba(0, 0, 0, 0.0964178), 0px 3.70349px 63.2238px rgba(0, 0, 0, 0.0814815), 0px 2.24799px 38.3764px rgba(0, 0, 0, 0.0701933), 0px 1.35451px 23.1235px rgba(0, 0, 0, 0.0598067), 0px 0.754281px 12.8766px rgba(0, 0, 0, 0.0485185), 0px 0.324411px 5.53816px rgba(0, 0, 0, 0.0335822);
    --shadow-gen: 0px 14px 239px rgba(0, 0, 0, 0.13), 0px 6.47262px 110.497px rgba(0, 0, 0, 0.0964178), 0px 3.70349px 63.2238px rgba(0, 0, 0, 0.0814815), 0px 2.24799px 38.3764px rgba(0, 0, 0, 0.0701933), 0px 1.35451px 23.1235px rgba(0, 0, 0, 0.0598067), 0px 0.754281px 12.8766px rgba(0, 0, 0, 0.0485185), 0px 0.324411px 5.53816px rgba(0, 0, 0, 0.0335822);
    --opacity-bg: ${(props) => props.opacity};
    --shadow-list: 0px 0px 3.8px rgba(0, 0, 0, 0.022),
    0px 0px 9.6px rgba(0, 0, 0, 0.031),
    0px 0px 19.5px rgba(0, 0, 0, 0.039),
    0px 0px 40.2px rgba(0, 0, 0, 0.048),
    0px 0px 110px rgba(0, 0, 0, 0.07);
    
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
    color: var(--text-dark);
    position: relative;
    
  }
  h1,h2,h3,h4{
    font-family: var(--rubik);
  }
  a{
    text-decoration: none;
    color: var(--text);
  }
li{
  list-style: none;
  color: var(--text-dark);
}
  img{
    max-width: 100% !important;
    height: auto !important;
    object-fit: cover !important;
  }
  .linkImage {
    height: 350px !important;
    width: 236px !important;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
  }
`;
