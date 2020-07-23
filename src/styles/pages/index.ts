import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;  
  
  > div {
    margin-right: 9rem;  
  }    
  
  @media (max-width: 800px) {        
    flex-direction: column;
    
    > div {   
      margin: 0;
                           
      text-align: center;            
    }
  }      
`;

export const Button = styled.button`
  margin-top: 35px;
  
  height: 55px;
  width: 240px;  

  display: flex;
  align-items: center;
  justify-content: center;      
  
  border: 0;
  outline: 0;    
  
  border-radius: 10px;
  
  cursor: pointer;
  
  font-size: 23px;
  font-weight: 500;
  
  color: var(--white);
  
  background-color: var(--primary);
  
  transition: opacity 200ms;
  
  > a {
    text-decoration: none;
    
    color: var(--white);
  }
  
  &:hover {
    opacity: 0.9;
  }
`;

export const Logo = styled.img`
  height: 400px;
  
  @media (max-width: 800px) {       
    display: none;    
  }
`;
