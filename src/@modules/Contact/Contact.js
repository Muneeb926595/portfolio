import React from "react";

import { Navbar, Row, Col } from "@components";

const Contact = () => {
  return (
    <Row noFlex wid="100%">
      <Col noFlex marg="0 2rem 0 0" wid="90px">
        <Navbar />
      </Col>
      <Col marg="7rem 0 0 0">
        <h1>Contact</h1>
      </Col>
    </Row>
  );
};

export default Contact;
