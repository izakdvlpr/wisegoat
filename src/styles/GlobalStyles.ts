import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    
    box-sizing: border-box;    
    
    font-family: 'Source Sans Pro', sans-serif;
  }
  
  html, body #root {
    height: 100%;
        
    color: var(--black);    
    
    background-color: var(--white);
  }
  
  :root {
    --primary: #72005F;
    --secondary: #BAA193;
    
    --black: #000;
    --white: #fff;
  }
`;
