import {Link} from 'react-router-dom'

//Components
import Categories from './Categories'

//Bootstrap Components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



//Style
import './Header.css'

export default function Header(props) {

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">BRAND</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Categories
              loading={props.loading}
              categories={props.categories}
              setSelect={props.setSelect}
              setUrl={props.setUrl}
              filterByCategory={props.filterByCategory}
               />
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
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
              value={props.input}
              aria-label="Search"
              onChange={(e)=> props.setInput(e.target.value)}
            />
            <Link to={'category/' + props.input}><Button variant="outline-success" onClick={()=> {return (props.setInput(props.input), console.log(props.input))}}>Search</Button></Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

