import React from "react";
import { Container, Row, Col, Accordion, Image } from "react-bootstrap";
import "./residantModule.css";
import light from "../assets/images/Rectangle 376.png";

const ResidantModule = () => {
  return (
    <>
      <Container sx={{ padding: "0px 60px" }}>
        <a className="link-style">FAQs</a>
        <h2 className="module-heading">
          Everything you need know about Resident module.
        </h2>
        <Row>
          <Col lg={6}>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Can I Change my plane later</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What is Your Cancellation Policy
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col lg={6}>
            <div className="light-background" />
          </Col>
        </Row>
        <div style={{ marginBottom: "60px" }} />
      </Container>
    </>
  );
};

export default ResidantModule;
