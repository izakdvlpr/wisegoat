import styled from 'styled-components';

import { FiSettings } from "react-icons/fi";

export const Container = styled.div`
  height: 70px;  
  
  padding: 0 30px;
  
  display: flex;
  align-items: center;
  justify-content: flex-end;  
`;

export const SettingsIcon = styled(FiSettings)`
  height: 45px;
  width: 45px;

  color: var(--white);
  
  border-radius: 50%;
  
  border: 10px solid var(--primary);
  
  background-color: var(--primary);
`;