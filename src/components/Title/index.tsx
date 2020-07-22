import React from "react";

import { Content, Wise, Goat } from "./styles";

interface SizeProps {
  size?: string | any;
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
