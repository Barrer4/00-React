import React from 'react';

//Components
import LoadingStatus from '../components/LoadingStatus';

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import Button from 'react-bootstrap/Button';

function CartPage(props) {
  let { cartItems, addItem, removeItem } = props;

  let itemsPrice = cartItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  let taxPrice = parseFloat((itemsPrice * 0.21).toFixed(2));
  console.log(typeof taxPrice);
  let shippingPrice = itemsPrice > 800 ? 0 : 50;
  let totalCart = parseFloat(
    (itemsPrice + taxPrice + shippingPrice).toFixed(2)
  );

  return (
    <>
      <Container className="mt-5">
        <Row className="mt-5">
          <h1>Shopping Cart</h1>
        </Row>
        <Row>
          {cartItems.length === 0 ? (
            <div className="mt-4">
              <h5>Your cart is empty</h5>
              <p>
                But no worries... You can go back to the store to add products
                to your basket 😊
              </p>{' '}
            </div>
          ) : (
            ''
          )}
        </Row>

        {cartItems.map((item) => (
          <Row className="mt-5 text-bottom" key={item.id}>
            <Col className="align-bottom">
              <img
                className="img-thumbnail"
                src={item.thumbnail}
                alt={item.title}
              />{' '}
            </Col>
            <Col>{item.title}</Col>
            <Col>
              <Button onClick={() => addItem(item)} className="add">
                {' '}
                +{' '}
              </Button>
            </Col>
            <Col>
              <p>{item.quantity}</p>
            </Col>
            <Col>
              <Button onClick={() => removeItem(item)} className="remove">
                {' '}
                -{' '}
              </Button>
            </Col>

            <Col>{item.price.toFixed(2)}</Col>
            <Col className="text-end">
              {' '}
              {(item.quantity * item.price).toFixed(2)}
            </Col>
          </Row>
        ))}

        {cartItems.length !== 0 && (
          <Container className="mt-5 w-50">
            <Row className="text-end">
              <Col>Sub Total</Col>
              <Col>{parseFloat(itemsPrice).toFixed(2)}</Col>
            </Row>
            <Row className="text-end">
              <Col>IVA</Col>
              <Col>{taxPrice}</Col>
            </Row>
            <Row className="text-end">
              <Col>Shipping Price</Col>
              <Col>{shippingPrice.toFixed(2)}</Col>
            </Row>
            <Row className="text-end">
              <Col>Total Cart Value</Col>
              <Col>{totalCart}</Col>
            </Row>
          </Container>
        )}
      </Container>
      <Container>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Product</th>
              <th> </th>
              <th>Quantity</th>
              <th> </th>
              <th>Price</th>
              <th>SubTotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>
                  <img
                    className="thumbnail"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                </td>
                <td> {item.title}</td>
                <td>
                  {' '}
                  <Button onClick={() => addItem(item)} className="add">
                    {' '}
                    +{' '}
                  </Button>
                </td>
                <td>{item.quantity}</td>
                <td>
                  {' '}
                  <Button onClick={() => removeItem(item)} className="remove">
                    {' '}
                    -{' '}
                  </Button>
                </td>
                <td>{item.title}</td>
                <td>{parseFloat((item.price * item.quantity).toFixed(2))}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default CartPage;
