import React from 'react';

//React-router-dom Components
import { Link } from 'react-router-dom';

//Images
import Cart from '../components/images/cart.png';
import User from '../components/images/user.png';

//Bootstrap Components

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

//Components
import Categories from '../../../000/src/components/Categories';
import Search from './Search';

function Header(props) {
  let { cartItems, filterByCategory } = props;
  console.log(cartItems);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand ><Link to='/' className="navbar-brand">CARA Store</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Categories filterByCategory={filterByCategory} />

              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Search />
            <Stack direction="horizontal" gap={2}>
              <div className="vr" />
              <Link href="/login">
                <Button className="icon-btn" variant="default">
                  <img className="user" src={User} alt="user-logo" />
                </Button>
              </Link>
              <Link to="/cart" onClick={()=> console.log('click al carrito')}>
                <Button
                  className="icon-btn"
                  variant="default"
                  
                >
                  <img className="cart" src={Cart} alt="cart-logo" />
                </Button>
              </Link>
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
