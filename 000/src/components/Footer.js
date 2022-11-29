import React from 'react';

//Bootstrap Components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Card className="text-center">
      <Card.Header as="h5"></Card.Header>
      <Card.Body>
        <Row>
          <Card.Title>Special title treatment</Card.Title>
        </Row>
        <Row>
          <Col>
            <Card.Img
              className="logo-img"
              alt="mastercard"
              src=".\images\mastercard.png"
            ></Card.Img>
        
          
            <Card.Img
              className="logo-img"
              alt="visa"
              src=".\images\visa.png"
            ></Card.Img>
        
          
            <Card.Img
              className="logo-img"
              alt="visa"
              src=".\images\paypal2.png"
            ></Card.Img>
          </Col>
        </Row>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Footer;
