import React from "react";
import "./payment.css";
import { Container, Row, Col, Card, Stack } from "react-bootstrap";
import image72 from "../assets/images/image 72.png";
import image69 from "../assets/images/image 69.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Payment = () => {
  return (
    <>
      <Container className="payment_margin">
        <Row>
          <Col lg={6} className="mar-bot">
            <Card
              style={{
                backgroundColor: "white",
                border: "none",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <img variant="top" className="img_72" src={image72} />
              <img variant="top" className="img_69" src={image69} />
              <Card.Body className="body-pad">
                <Card.Title>Maintenance Bill Payments</Card.Title>
                <Card.Text className="paymet-text">
                  Effortlessly manage and settle maintenance-related bills and
                  fees within the app. Make secure payments for utilities,
                  common area maintenance, and other expenses directly from your
                  device, ensuring a hassle-free financial experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} style={{ paddingLeft: "40px", margin: "auto" }}>
            <div className="arrow-align">
              <MdKeyboardDoubleArrowRight
                size={25}
                className="background-circle"
              />
              <p className="pay-arrows">Simplified Payments</p>
            </div>
            <p className="pay-arr-text">
              asily settle maintenance bills with the app.
            </p>
            <div className="arrow-align">
              <MdKeyboardDoubleArrowRight
                size={25}
                className="background-circle"
              />
              <p className="pay-arrows">Simplified Payments</p>
            </div>
            <p className="pay-arr-text">
              asily settle maintenance bills with the app.
            </p>
            <div className="arrow-align">
              <MdKeyboardDoubleArrowRight
                size={25}
                className="background-circle"
              />
              <p className="pay-arrows">Simplified Payments</p>
            </div>
            <p className="pay-arr-text">
              asily settle maintenance bills with the app.
            </p>
            <div className="arrow-align">
              <MdKeyboardDoubleArrowRight
                size={25}
                className="background-circle"
              />
              <p className="pay-arrows">Simplified Payments</p>
            </div>
            <p className="pay-arr-text">
              asily settle maintenance bills with the app.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Payment;
