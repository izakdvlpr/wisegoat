import styled from "styled-components";

import { shade } from "polished";

import { IoMdArrowRoundBack } from "react-icons/io";

export const Container = styled.nav`
  height: 100px;
  width: 100%;

  z-index: 999;

  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ArrowIcon = styled(IoMdArrowRoundBack)`
  height: 35px;
  width: 35px;
  
  margin: 5px;

  color: var(--white);
  
  cursor: pointer;

  border-radius: 50%;
  border: 5px solid ${shade(0.15, "#72005F")};

  background-color: ${shade(0.15, "#72005F")};
`;
