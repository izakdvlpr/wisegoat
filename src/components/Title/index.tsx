import React from "react";

import { Content, Wise, Goat } from "./styles";

export interface SizeProps {
  size?: string;
}

const Header: React.FC<SizeProps> = ({ size }) => {
  return (
    <Content>
      <Wise>Wise</Wise>
      <Goat size={size}>Goat</Goat>
    </Content>
  );
};

export default Header;
