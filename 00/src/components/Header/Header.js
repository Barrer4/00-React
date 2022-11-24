
import {  Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


//Style
import './Header.css'

//Components


export default function Header() {

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand
            href="/">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown
                title="Categorías"
                id="navbarScrollingDropdown">
                <NavDropdown.Item href="">Aquí van las categorías</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/ContactForm">
                Contact us
              </Nav.Link>
            </Nav>
          

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  )
}

