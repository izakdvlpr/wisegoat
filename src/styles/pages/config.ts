import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  height: calc(100vh - 100px);
    
  display: flex;   
  flex-direction: column;   
  justify-content: center;
  
  > h1 {        
    margin: 30px;
    
    text-align: center;
    text-transform: uppercase;
    
    font-size: 35px;    
    font-weight: 700;
    
    color: var(--primary);
  }  
`;
