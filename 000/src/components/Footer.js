import React from 'react';
import { Link } from 'react-router-dom';

//Bootstrap Icons
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsCreditCard,
} from 'react-icons/bs';
import { FaCcMastercard, FaCcPaypal } from 'react-icons/fa';
import { SiVisa } from 'react-icons/si';

//Bootstrap Components
import { Card, Col, Row, Stack } from 'react-bootstrap';

function Footer() {
  return (
    <Card className="text-center" id="footer">
      <Card.Header bg="dark" variant="dark" id="footer-header"></Card.Header>
      <Card.Body id="footer-body">
        <Row>
          <Col md={4}>
            <Link to="/contactus" className="footer-link">
              Contact us
            </Link>{' '}
          </Col>
          <Col md={4}>
            <p>Payments accepted </p>
          </Col>
          <Col md={4}></Col>
        </Row>
        <Row className="">
          <Col md={4}>
            <Stack
              className="justify-content-center mt-2"
              direction="horizontal"
              gap={3}
            >
              <BsInstagram gap={2} />
              <BsFacebook gap={2} />
              <BsTwitter gap={2} />
            </Stack>
          </Col>

          <Col md={4}>
            <Stack
              className="justify-content-center mt-2"
              direction="horizontal"
              gap={3}
            >
              <FaCcMastercard />
              <SiVisa />
              <FaCcPaypal />
              <BsCreditCard />
            </Stack>
          </Col>

          <Col md={4}></Col>
        </Row>

        {/*     <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Footer;
