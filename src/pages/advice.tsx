import React, { useEffect, useState } from "react";
import Layout from "@layout";

import Link from "next/link";

import AdviceSlipAPI, { PhraseProps } from "../api/AdviceSlip";

import Title from "../components/Title";

import { Container, Navigation, ArrowIcon, Content, Text, Image } from '../styles/pages/advice';

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
          <Link href="/">
            <a>
              <ArrowIcon />
            </a>
          </Link>
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
