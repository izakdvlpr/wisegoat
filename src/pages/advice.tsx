import React, { useEffect, useState } from "react";
import Layout from "@layout";

import Link from "next/link";

import AdviceSlipAPI, { PhraseProps } from "../api/AdviceSlip";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import { Container, Content, Text, Image } from '../styles/pages/advice';

const AdvicePage: React.FC = () => {
  const [phrase, setPhrase] = useState<PhraseProps>();
      
  useEffect(() => {
    AdviceSlipAPI.getPhrase().then(r => setPhrase(r.data));    
  }, []);
  
  return (
    <Layout title="Conselho do Bode">
      <Container>
        <Navigation />
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
      <Footer />
    </Layout>
  );
};

export default AdvicePage;
