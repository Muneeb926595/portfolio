import React from "react";

import { Navbar, Row, Col } from "@components";

const About = () => {
  return (
    <Row noFlex wid="100%">
      <Col noFlex marg="0 2rem 0 0" wid="90px">
        <Navbar />
      </Col>
      <Col marg="7rem 0 0 0">
        <h1>About</h1>
      </Col>
    </Row>
  );
};

export default About;
