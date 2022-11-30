import React from 'react';
import { Link } from 'react-router-dom';

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

function CartPage(props) {
  return (
    <Container className="mt-5">
      <Row>
        <h1>Shopping Cart</h1>
      </Row>
      <Row>
        {props.cartItems.length === 0 ? (
          <div className="mt-4">
            <h5>Your cart is empty</h5>
            <p>
              You can go back to the store to add products to your basket 😊
            </p>{' '}
          </div>
        ) : (
          ''
        )}
      </Row>

      {props.cartItems.map((item) => (
        <Row key={item.id}>
          <Col>{item.title}</Col>
          <Col>
            <Button onClick={() => props.plusItem(item)} className="add">
              {' '}
              +{' '}
            </Button>
            <Button onClick={() => props.minusItem(item)} className="remove">
              {' '}
              -{' '}
            </Button>
          </Col>
          <Col>{item.qty} </Col>
          <Col>
            <p> x </p>
          </Col>
          <Col> {item.price.toFixed(2)}</Col>
        </Row>
      ))}

      <Col>
        <Link to="/" className="d-grid gap-2">
          <Button>Keep shopping</Button>
        </Link>
      </Col>
      <Col>
        <Link to="/checkout" className="d-grid gap-2">
          <Button>Check out</Button>
        </Link>
      </Col>
    </Container>
  );
}

export default CartPage;
