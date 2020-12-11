import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Layout from '../components/Layout';
import PrincipalTextGenerator from '../components/PrincipalTextGenerator';
import { PrimaryButton, Wrapper } from '../styles';

// markup
const IndexPage = () => {
  return (
    <Wrapper>
      <Layout>
        <div style={{ display: 'flex', flexFlow: 'row', alignItems: 'center', height: '100%', margin: '-74.44px 0' }}>
          <div style={{ flex: '10%' }}></div>
          <div style={{ flex: '90%', display: 'flex', flexFlow: 'column' }}>
            <PrincipalTextGenerator text="Welcome to explore all universes" />
            <PrimaryButton>Look up Morty</PrimaryButton>
          </div>
        </div>
      </Layout>
    </Wrapper>
  );
};

export default IndexPage;
