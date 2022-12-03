import React from 'react';
import { Link } from 'react-router-dom';

//Images
import Mastercard from '../components/images/footer/mastercard.png';
import Visa from '../components/images/footer/visa.png';
import PayPal from '../components/images/footer/paypal2.png';

//Bootstrap Components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import ContactUs from '../pages/ContactUs';


function Footer() {
  return (
    <Card className="text-center">
      <Card.Header as="h5"></Card.Header>
      <Card.Body>
        <Row>
          <Card.Title>Special title treatment</Card.Title>
        </Row>
        <Row>
          <Col md={4}>
            <Link to="/contactus">Contact us</Link>
          </Col>
          <Col md={4} className="footer-row">
            <img
              className="footer-img img-mc"
              src={Mastercard}
              alt="mastercard"
            />
            <img className="footer-img img-md" src={Visa} alt="mastercard" />
            <img className="footer-img img-pp" src={PayPal} alt="mastercard" />
          </Col>
          <Col md={4}></Col>
        </Row>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Footer;
