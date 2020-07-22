import React from 'react';
import Link from "next/link";

import Title from "../Title";

import { Container, ArrowIcon } from './styles';

const NavigationComponent: React.FC = () => {
  return (
    <Container>
      <Title
        wise="20px"
        goat="40px"
      />         
      <Link href="/">
        <a>
          <ArrowIcon />
        </a>
      </Link>
    </Container>
  )
}

export default NavigationComponent;