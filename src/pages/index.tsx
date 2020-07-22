import React from "react";
import Layout from "@layout";

import Link from "next/link";

import Title from "../components/Title";

import { Container, Button, Logo } from "../styles/pages";

const Index = () => {
  return (
    <Layout title="Peça um conselho para o bode">
      <Container>
        <div>
          <Title size="15px"/>
          <Button>
            <Link href="/">
              <a>Pedir conselho</a>
            </Link>
          </Button>
        </div>

        <Logo src="/bodezinho.png" />
      </Container>
    </Layout>
  );
};

export default Index;
