import React from 'react';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import {
  BsFillPersonCheckFill,
  BsFillPersonXFill,
  BsBasket3,
  BsBasket3Fill,
} from 'react-icons/bs';

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
import { Dropdown, DropdownButton } from 'react-bootstrap';

function Header(props) {
  let {
    filterByCategory,
    cartItems,
    setUrl,
    currentPage,
    productsPerPage,
    user,
  } = props;

  let home = `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
    productsPerPage * (currentPage - 1)
  }`;

  console.log(user);
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
              {user === undefined ? (
                <Link to="/signin">
                  <Button className="user-btn" variant="danger">
                    <BsFillPersonXFill className="icon" />{' '}
                  </Button>
                </Link>
              ) : (
                <>
                  <DropdownButton variant="dark"align="start" id="dropdown-menu-align-end" />
                  <Button className="user-btn" variant="success">
                    <BsFillPersonCheckFill className="icon" />
                  </Button>
                </>
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
