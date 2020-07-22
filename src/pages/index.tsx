import React from "react";
import Layout from "@layout";

import Link from "next/link";

import Title from "../components/Title";
import Footer from "../components/Footer";

import { Container, Button, Logo } from "../styles/pages";

const IndexPage = () => {
  return (
    <Layout title="Peça um conselho para o bode">
      <Container>
        <div>
          <Title />
          <Button>
            <Link href="/advice">
              <a>Pedir conselho</a>
            </Link>
          </Button>
        </div>

        <Logo src="/bodezinho.png" />
      </Container>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
