import React from 'react';
import Layout from "@layout";

import Navigation from "@components/Navigation";

import { Container, Content } from '@styles/config';

const ConfigPage: React.FC = () => {
  
  function handleSelectLanguage() {
    
  }
  
  return (
    <Layout title="Menu de configurações">
      <Container>
        <Navigation />
        <Content>
          <h1>Config</h1>          
          
          <h3>Mudar de Idioma</h3>
          <p>Hola como estás? Mude para seu idioma de preferencia.</p>
          
          <ul>
            <li>Português</li>
            <li>Inglês</li>
          </ul>
        </Content>
      </Container>
    </Layout>
  );
}

export default ConfigPage;