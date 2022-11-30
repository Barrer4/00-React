import React from 'react';

//Images
import Cart from '../components/images/cart.png'
import User from '../components/images/user.png'

//Bootstrap Components
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function Search() {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Stack direction="horizontal" gap={2}>
        <Button variant="outline-success">Search</Button>
        <div className="vr" />
        <Nav.Link href="/login">
          <Button className="icon-btn" variant="default">
          <img className="user" src={User} alt='user-logo'/>
          </Button>
        </Nav.Link>

        <Nav.Link href="/cart">
          <Button className="icon-btn" variant="default">
            
            <img className="cart" src={Cart} alt='cart-logo'/>
          </Button>
        </Nav.Link>
      </Stack>
    </Form>
  );
}

export default Search;
