import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import resident_img from "../assets/images/resi_app.png";
import "./home.css";

const Home = () => {
  return (
    <>
      <Container fluid className="residant_bg">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="resident_wrap">
              <h1>Empowering Residents for Seamless Living</h1>
              <p>
                Unlock a New Level of Community Engagment with the Residant
                Module App
              </p>
              <Button className="primary">Request Demo</Button>
            </div>
            </Col>
            <Col lg={6}>
              <Image src={resident_img} alt="image" className="banner_img" />
            </Col>
          </Row>
        </Container>
      </Container>
      
    </>
  );
};

export default Home;
{
  /* <Row>
<Col lg={6}>
 <div className='first-frame'>
   <h1>Empowering Residents for Seamless Living</h1>
   <p>Unlock a New Level of Community Engagment with the Residant Module App</p>
   <Button className='primary'>Request Demo</Button>
 </div>
</Col>
 <Col lg={6}>
   <div className='frame-image'/>
 </Col>
</Row> */
}
