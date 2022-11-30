import React from 'react';

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

function PaymentPage() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Form className="payment-form">
            <Form.Label style={{ fontSize: '20px' }}>
              Please select payment method
            </Form.Label>
            <Form.Check
            style={{marginLeft: '1.5rem', marginTop: '1rem'}}
              type="radio"
              id="default-radio"
              label="Paypal or credit-card"
            />

            <Nav.Link href="/login" className="mt-4 d-grid gap-2">
              <Button variant="primary" type="submit">
                Continue
              </Button>
            </Nav.Link>
          </Form>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
}

export default PaymentPage;
