import React, { useEffect, useState } from "react";
import Layout from "@layout";

import GoogleTranslate from "@api/GoogleTranslate";
import AdviceSlipAPI from "@api/AdviceSlip";

import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

import { Container, Content, Text, Image } from '@styles/advice';

const AdvicePage: React.FC = () => {
  const [phrase, setPhrase] = useState('');    
      
  useEffect(() => {
    AdviceSlipAPI.getPhrase().then(async (r) => {
      const translate = await GoogleTranslate.translateText(r.data.slip.advice, { from: 'en', to: 'pt' });
      
      setPhrase(translate.translated)
    });                  
  }, []);
  
  return (
    <Layout title="Conselho do Bode">
      <Container>
        <Navigation />
        <div>          
          {phrase && (
            <Content>
              <Text>            
                "{phrase}"
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
