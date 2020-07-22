import React from 'react';
import Layout from "../layout";

import Navigation from "../components/Navigation";

import { Container, Content } from '../styles/pages/config';

const ConfigPage: React.FC = () => {
  return (
    <Layout title="Menu de configurações">
      <Container>
        <Navigation />
        <Content>
          olá
        </Content>
      </Container>
    </Layout>
  );
}

export default ConfigPage;