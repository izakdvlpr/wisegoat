import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wise = styled.div`
  padding: 0;

  font-size: 60px;
  font-weight: 500;
  
  color: var(--secondary);
`;

export const Goat = styled.div`
  padding: 0;

  font-size: ${props => props.size || "90px"};
  font-weight: 700;
  
  color: var(--primary);
`;