import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    
    box-sizing: border-box;    
    
    font-family: 'Roboto', sans-serif;
  }
  
  html, body #root {
    height: 100%;
        
    color: var(--black);    
    
    background-color: var(--white);
  }  
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--secondary);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--primary);
  }
  
  :root {
    --primary: #72005F;
    --secondary: #BAA193;
    --tertiary: #EBE4E0;
    
    --black: #000000;
    --white: #FFFFFF;      
  }
`;
