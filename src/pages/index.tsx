import React from "react";
import Layout from "@layout";
import Link from "next/link";

import Title from "@components/Title";

import { Container, Button, Logo } from "@styles/index";

const IndexPage = () => {
  return (
    <Layout title="Peça um conselho para o bode">
      <Container>
        <div>
          <Title />
          <Button>
            <Link href="/advice">
              Peça seu conselho
            </Link>
          </Button>
        </div>

        <Logo src="/bodezinho.png" />
      </Container>
    </Layout>
  );
};

export default IndexPage;
