import React from 'react';

//Images
import Mastercard from '../components/images/footer/mastercard.png';
import Visa from '../components/images/footer/visa.png';
import PayPal from '../components/images/footer/paypal2.png';

//Bootstrap Components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

function Footer() {
  return (
    <Card className="text-center">
      <Card.Header as="h5"></Card.Header>
      <Card.Body>
        <Row>
          <Card.Title>Special title treatment</Card.Title>
        </Row>
        <Row className="footer-row">
          <img className="footer-img" src={Mastercard} alt="mastercard" />
          <img className="footer-img" src={Visa} alt="mastercard" />
          <img className="footer-img" src={PayPal} alt="mastercard" />
        </Row>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Footer;
