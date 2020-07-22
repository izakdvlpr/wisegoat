import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  
  html, body #root {
    height: 100%;
    background-color: #0b0a0a;
    color: var(--white);
  }
  
  :root {
    --primary: #b20000;
    
    --black: #000;
    --white: #fff;
  }
`;
