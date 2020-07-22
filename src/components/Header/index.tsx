import React from "react";
import Link from 'next/link';

import { Container, Title, Item, Button } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Title>
        Codar<span>.</span>
      </Title>
      <Item>Início</Item>
      <Item>Serviços</Item>
      <Item>Contato</Item>
      <Button><Link href="/"><a>Login</a></Link></Button>
    </Container>
  );
};

export default Header;
