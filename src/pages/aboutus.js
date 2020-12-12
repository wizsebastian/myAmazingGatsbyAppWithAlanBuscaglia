import React from 'react';
import AboutUsImages from '../components/AboutUsImages';
import Layout from '../components/Layout';
import { PrincipalTextContainer } from '../components/PrincipalTextGenerator/styles';
import { Wrapper } from '../styles';

const AboutUs = () => {
  return (
    <Wrapper>
      <Layout>
        <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', flexFlow: 'row wrap' }}>
          <div style={{ flex: 1 }}>
            <AboutUsImages />
          </div>
          <div style={{ paddingLeft: '25px', flex: 1 }}>
            <PrincipalTextContainer>
              Buenas a todos ! bienvenidos a esta hermosa comunidad que estamos logrando dia a dia !, no tengas miedo de
              utilizar los diferentes recursos para saciar tus ganas de conocimiento. Todos somos pares y nos vamos a
              ayudar entre nosotros asi que .... no esperes más !!
            </PrincipalTextContainer>
          </div>
        </div>
      </Layout>
    </Wrapper>
  );
};

export default AboutUs;
