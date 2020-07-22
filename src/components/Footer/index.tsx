import React from 'react';
import Link from "next/link";

import { Container, SettingsIcon } from './styles';

const FooterComponent: React.FC = () => {
  return (
    <Container>
      <Link href="/config">
        <a>
          <SettingsIcon />
        </a>
      </Link>
    </Container>
  )
}

export default FooterComponent;