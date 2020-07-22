import React, { useEffect, useState } from "react";
import Layout from "@layout";

import AdviceSlipAPI, { PhraseProps } from "../api/AdviceSlip";

import Title from "../components/Title";

import { Container, Navigation, Content, Text, Image } from '../styles/pages/advice';

const Advice: React.FC = () => {
  const [phrase, setPhrase] = useState<PhraseProps>();
      
  useEffect(() => {
    AdviceSlipAPI.getPhrase().then(r => setPhrase(r.data));        
  }, []);    
  
  return (
    <Layout title="Conselho do Bode">
      <Container>
        <Navigation>
          <Title
            wise="20px"
            goat="40px"
          />
        </Navigation>
        <div>
          {phrase && (
            <Content>
              <Text>            
                "{phrase?.slip.advice}"
                <br />
                <span>Goat</span>
              </Text>
              <Image src="http://placegoat.com/250/250" alt="bodezinho"/>
            </Content>
          )} 
        </div>       
      </Container>
    </Layout>
  );
};

export default Advice;
