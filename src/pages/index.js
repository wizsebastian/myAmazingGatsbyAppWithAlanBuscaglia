import * as React from "react";
import { Container, Row, Col } from "reactstrap";

import Header from "../components/Header";
import PrincipalTextGenerator from "../components/PrincipalTextGenerator";
import { Wrapper, PrimaryButton } from "../styles";

import "bootstrap/dist/css/bootstrap.min.css";

// markup
const IndexPage = () => {
  return (
    <Wrapper>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="6">
            <PrincipalTextGenerator text="Welcome to explore all universes" />
            <PrimaryButton>
              Look up Morty
            </PrimaryButton>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default IndexPage;
