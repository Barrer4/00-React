import React from 'react';

//React Icons
import { FiTrash, FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CartPage(props) {
  let { cartItems, addItem, removeItem, deleteItem } = props;

  let itemsPrice = cartItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  let taxPrice = parseFloat((itemsPrice * 0.21).toFixed(2));
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
      </Container>
      {cartItems.length !== 0 && (
        <Container className="mt-5">
          <Table responsive className="table table-hover align-middle">
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>Image</th>
                <th>Product</th>
                <th> </th>
                <th>Quantity</th>
                <th> </th>
                <th className="text-end">Unit Price</th>
                <th className="text-end">Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr className="text-center" key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      className="img-thumbnail2"
                      src={item.thumbnail}
                      alt={item.title}
                      size={{ width: '2rem' }}
                    />
                  </td>
                  <td> {item.title}</td>
                  <td>
                    <FiPlusCircle
                      onClick={() => addItem(item)}
                      className="plus-icon"
                    />
                  </td>
                  <td>{item.quantity}</td>
                  <td>
                    <FiMinusCircle
                      onClick={() => removeItem(item)}
                      className="minus-icon"
                    />
                  </td>
                  <td className="text-end">
                    {parseFloat(item.price).toFixed(2)}
                  </td>
                  <td className="text-end">
                    {' '}
                    {parseFloat(item.quantity * item.price).toFixed(2)}
                  </td>
                  <td>
                    <FiTrash onClick={() => deleteItem(item)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Link className="mt-3 d-flex justify-content-center checkout-btn">
            <Button
              className="col-sm-3 btn-block checkout-btn"
              variant="warning"
              onClick
            >
              Proceed to checkout {' '}
              {cartItems.length > 0 && (
                <>
                  (
                  {cartItems.reduce(
                    (accumulator, currentItems) =>
                      accumulator + currentItems.quantity,
                    0
                  )}{' '}
                  items)
                </>
              )}
            </Button>
          </Link>
          <Row className="mt-3">
            <Col></Col>
            <Col md={4}>
              <Table>
                <tbody className="w-50 text-end justify-content-end">
                  <tr>
                    <td>Sub Total</td>
                    <td>{parseFloat(itemsPrice).toFixed(2)}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>IVA</td>
                    <td>{taxPrice}</td>
                    <td></td>
                  </tr>{' '}
                  <tr>
                    <td>Shipping</td>
                    <td>{shippingPrice.toFixed(2)}</td>
                    <td></td>
                  </tr>{' '}
                  <tr>
                    <td>Total Cart Value</td>
                    <td>{totalCart}</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      )}{' '}
    </>
  );
}

export default CartPage;
