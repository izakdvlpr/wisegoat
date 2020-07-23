import styled from 'styled-components';

import { IoMdArrowRoundBack } from "react-icons/io";

export const Container = styled.nav`
  height: 100px;
  width: 100%;    
  
  z-index: 999;
  
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;    
`;

export const ArrowIcon = styled(IoMdArrowRoundBack)`
  height: 35px;
  width: 35px;

  color: var(--primary);
  
  border-radius: 50%;
  
  border: 5px solid var(--tertiary);
  
  background-color: var(--tertiary);
`;