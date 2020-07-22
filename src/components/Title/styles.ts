import styled from 'styled-components';

import { SizeProps } from ".";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wise = styled.div<SizeProps>`
  padding: 0;

  font-size: ${props => props.wise || "60px"};
  font-weight: 500;
  
  color: var(--secondary);
`;

export const Goat = styled.div<SizeProps>`
  padding: 0;

  font-size: ${props => props.goat || "90px"};
  font-weight: 700;
  
  color: var(--primary);
`;