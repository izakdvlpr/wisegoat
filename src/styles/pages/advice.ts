import styled from "styled-components";

export const Container = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  > div {
    height: calc(100vh - 100px);
    
    display: flex;    
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  width: 600px;    

  display: flex;
  align-items: center;
  justify-content: center;    
  
  border-radius: 15px;

  background-color: var(--tertiary);
  
  @media (max-width: 624px) {  
    width: 300px;
    
    padding: 15px 0;
          
    flex-direction: column;
  }
`;

export const Text = styled.h3`
  width: 400px;
  
  padding: 25px 60px;

  font-size: 20px;
  font-weight: 700;

  color: var(--primary);
  
  > span {                
    font-size: 15px;
    font-weight: 500;
    
    color: var(--secondary);
  }        
  
  @media (max-width: 624px) {  
    width: 300px;
  
    padding: 25px 60px;
  }
`;

export const Image = styled.img`
  border-radius: 15px;
`;
