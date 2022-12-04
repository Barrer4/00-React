import React from 'react';
import {
  BsFillPersonCheckFill,
  BsFillPersonXFill,
  BsBasket3,
  BsBasket3Fill,
} from 'react-icons/bs';

//React-router-dom Components
import { Link, NavLink } from 'react-router-dom';

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';

//Components
import Categories from '../../../000/src/components/Categories';
import { NavDropdown } from 'react-bootstrap';

function Header(props) {
  let {
    filterByCategory,
    cartItems,
    setUrl,
    currentPage,
    productsPerPage,
    user,
    signOut,
  } = props;

  let home = `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
    productsPerPage * (currentPage - 1)
  }`;

  return (
    <>
      <Navbar className="text-light" bg="info" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand" onClick={() => setUrl(home)}>
              CARA Store
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 category"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Categories filterByCategory={filterByCategory} />
            </Nav>

            <Stack direction="horizontal" gap={2} className="me-2">
              {user === null ? (
                <Link to="/login">
                  <Button className="user-btn" variant="danger">
                    <BsFillPersonXFill className="icon" />
                  </Button>
                </Link>
              ) : (
                <Nav>
                  <NavDropdown
                    id="arrow-user"
                    variant="light"
                    align="start"
                    drop="start"
                  >
                    <NavDropdown.Item>
                      <NavLink
                        className="dropdown-item"
                        href="/"
                        onClick={signOut}
                      >
                        Sign Out
                      </NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Button className="user-btn" variant="success">
                    <BsFillPersonCheckFill className="icon" />
                  </Button>
                </Nav>
              )}

              {cartItems.length === 0 && (
                <Link to="/cart">
                  <Button className="icon-btn" variant="default">
                    <BsBasket3 />
                  </Button>
                  <Badge className="cart-badge" pill bg="danger" text="light">
                    0
                  </Badge>
                </Link>
              )}

              {cartItems.length > 0 && (
                <Link to="/cart">
                  <Button className="icon-btn" variant="default">
                    <BsBasket3Fill />
                  </Button>
                  <Badge className="cart-badge" pill bg="danger" text="light">
                    {cartItems.reduce(
                      (accumulator, currentItems) =>
                        accumulator + currentItems.quantity,
                      0
                    )}
                  </Badge>
                </Link>
              )}
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
