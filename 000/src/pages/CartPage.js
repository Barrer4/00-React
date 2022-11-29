import React from 'react';
import { Link } from 'react-router-dom';

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

function CartPage() {
  return (
    <Container className="mt-3">
      <Row>
        <Col md={2}>
          <h4>.</h4>
        </Col>
        <Col md={6}>
          <h4>Products</h4>
        </Col>
        <Col md={2}>
          <h4>Qty</h4>
        </Col>
        <Col md={2}>
          <h4>Price</h4>
        </Col>
      </Row>
      <Row>
      <Col >
          <Link to="/" className="d-grid gap-2">
            <Button>Keep shopping</Button>
          </Link>
       </Col>
       <Col >
          <Link to="/checkout" className="d-grid gap-2">
            <Button>Check out</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage;
