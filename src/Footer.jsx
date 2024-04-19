import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  Stack,
} from "react-bootstrap";
import "./footer.css";
import logo from "../src/assets/images/Logo.png";
import mobileApp1 from "../src/assets/images/MobileApp1.png";
import mobileApp2 from "../src/assets/images/MobileApp2.png";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-bg">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="foot-pad">
                <h2 className="footer-heading">Sign up for newsletter!</h2>
                <p className="footer-text">
                  Get notified about launch,updates and weekly blogs.
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <Form.Control
                type="text"
                className="input-feild"
                placeholder="Enter your email"
              />
            </Col>
            <Col lg={2} md={2} sm={12}>
              <div className="top-margin">
                <Button className="primary-two">Subscribe</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom small-center">
        <Container>
          <Row>
            <Col lg={4} md={4} sm={12}>
              <Image src={logo} alt="company logo" />
              <p className="footer-logo-bot">
                Revolutionize apartment living with our <br /> feature-rich
                management-app.
              </p>
            </Col>
            <Col lg={2} md={2} sm={12}>
              <p className="footer-head ">Products</p>
              <Stack direction="col" className="footerText" gap={3}>
                <span>Resident App</span>
                <span>Gatekeeper</span>
                <span>Facility Management</span>
                <span>Admin Dashboard</span>
              </Stack>
            </Col>
            <Col lg={2} md={2} sm={12}>
              <p className="footer-head">Quick Links</p>
              <Stack direction="col" className="footerText" gap={3}>
                <span>Home</span>
                <span>Pricing</span>
                <span>Blogs</span>
                <span>Contact Us</span>
              </Stack>
            </Col>
            <Col lg={2} md={2} sm={12}>
              <p className="footer-head">Legal</p>
              <Stack direction="col" className="footerText" gap={3}>
                <span>Privacy Policy</span>
                <span>Terms & Conditions</span>
                <span>Copy Right Policy</span>
              </Stack>
            </Col>
            <Col lg={2} md={2} sm={12}>
              <p className="footer-head">Get the app</p>
              <Stack direction="col" gap={3}>
                <Image
                  className="center-image"
                  src={mobileApp2}
                  width="135px"
                  height="40px"
                  alt="mobile logo two"
                />
                <Image
                  className="center-image"
                  src={mobileApp1}
                  width="135px"
                  height="40px"
                  alt="mobile logo one"
                />
              </Stack>
            </Col>
          </Row>
          <hr className="line-style" />
          <div className="footer-last-text">
            <p className="footer-logo-bot">
              © 2023 myDEN. All rights reserved.
            </p>
            <Stack direction="horizontal" gap={3}>
              <span>{<FaTwitter color="grey" size={20} />}</span>
              <span>{<FaLinkedin color="grey" size={20} />}</span>
              <span>{<FaFacebook color="grey" size={20} />}</span>
            </Stack>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
