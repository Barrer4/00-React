import React, { useEffect, useState } from 'react';

//Pages
import SignInPage from './SignInPage';

//Bootstrap Components
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function ShippingPage(props) {
  let user = props.user;

  if (props.user === null) {
    <SignInPage />
  }
  let [address, setAddress] = useState(user.address.address, '');
  let [city, setCity] = useState(user.address.city || '');
  let [postalCode, setPostalCode] = useState(user.address.postalCode || '');
  let [state, setState] = useState(user.address.state || '');

  return (
    <Container className="mt-3">
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>State</Form.Label>
                <Form.Control
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Button className="mt-3 w-25 " variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
}

export default ShippingPage;
