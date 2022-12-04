import React, { useEffect, useState } from 'react';

//Pages
import SignInPage from './SignInPage';

//Bootstrap Components
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ErrorStatus from '../components/ErrorStatus';

function ShippingPage(props) {
  let address = props;
  let [street, setStreet] = useState(address.address, '');
  let [city, setCity] = useState(address.city || '');
  let [postalCode, setPostalCode] = useState(address.postalCode || '');
  let [state, setState] = useState(address.state || ''); 

  if (address) {
    return <ErrorStatus />;
  }
console.log(address)
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
                value={street}
                onChange={(e) => setStreet(e.target.value)}
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
