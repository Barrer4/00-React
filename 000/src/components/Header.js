import React from 'react';
import { FiShoppingCart, FiUser } from 'react-icons/fi';

//React-router-dom Components
import { Link } from 'react-router-dom';

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';

//Components
import Categories from '../../../000/src/components/Categories';

function Header(props) {
  let {
    filterByCategory,

    cartItems,
    setUrl,
    currentPage,
    productsPerPage,
  } = props;

  let home = `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
    productsPerPage * (currentPage - 1)
  }`;

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand" onClick={() => setUrl(home)}>
              CARA Store
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Categories filterByCategory={filterByCategory} />
            </Nav>

            <Stack direction="horizontal" gap={2} className="me-2">
              <Link href="/login">
                <Button className="icon-btn" variant="default">
                  <FiUser className="icon" />
                </Button>
              </Link>

              <Link to="/cart">
                <Button
                  className="icon-btn"
                  variant="default"
                  style={{ height: 'auto' }}
                >
                  <FiShoppingCart className="icon" />
                </Button>
                {cartItems.length === 0 && (
                  <Badge className="cart-badge" pill bg="danger" text="light">
                    0
                  </Badge>
                )}
                {cartItems.length > 0 && (
                  <Badge className="cart-badge" pill bg="warning" text="dark">
                    {cartItems.reduce(
                      (accumulator, currentItems) =>
                        accumulator + currentItems.quantity,
                      0
                    )}
                  </Badge>
                )}
              </Link>
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
