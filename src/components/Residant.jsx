import React from "react";
import "./residant.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { cardDetails } from "./cardData";

const Residant = () => {
  return (
    <>
      <Container className="top-pading">
        <Row>
          {cardDetails.map((ele, ind) => {
            return (
              <Col lg={3} key={ind} className="bot-pading ">
                <Card className="card-size">
                  <img
                    variant="top"
                    src={ele.cardImg}
                    className="img-size"
                    alt=""
                  />
                  <Card.Body>
                    <p className="card-text">{ele.cardText}</p>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <div className="bg-grey">
        <Container>
          <h1>Resident</h1>
          <p>
            Welcome to our Resident Module, where convenience meets community
            living. Explore how our app empowers residents with a range of
            features designed to enhance their living experience and foster a
            sense of belonging
          </p>
        </Container>
      </div>
    </>
  );
};

export default Residant;
