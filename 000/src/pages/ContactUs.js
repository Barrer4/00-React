import React from 'react';

//Bootstrap Components
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function ContactUs() {
  return (
    <Container className="mt-3">
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="formBasicText"
              aria-required
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                aria-required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter lastname" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTel">
              <Form.Label>Telephone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter mobile phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                aria-required
              />
            </Form.Group>

            <Form.Select aria-label="Category">
              <option>Click to select category</option>
              <option value="1">Complain</option>
              <option value="2">Request</option>
              <option value="3">Recommendation</option>
            </Form.Select>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Please, write below your comments</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create Account
            </Button>
          </Form>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
