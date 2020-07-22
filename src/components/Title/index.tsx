import React from "react";

import { Content, Wise, Goat } from "./styles";

export interface SizeProps {
  wise?: string;
  goat?: string;
}

const Header: React.FC<SizeProps> = ({ wise, goat }) => {
  return (
    <Content>
      <Wise wise={wise}>Wise</Wise>
      <Goat goat={goat}>Goat</Goat>
    </Content>
  );
};

export default Header;
