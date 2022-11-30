import React from 'react';
import { Link } from 'react-router-dom';

//Images
import Error from '../components/images/error.png'
//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Button from 'react-bootstrap/Button';

function NotFoundPage() {
  return (
    <Container className="mt-3">
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Row>
            <Image
              style={{
                margin: 'auto',
                justifySelf: 'center',
                width: '60%',
                objectFit: 'contain',
              }}
              src={Error}
              alt="error"
            />
          </Row>
          <Row className="mt-3 d-flex text-center">
            <h3>There's been a glitch...</h3>
            <p>But you can go back or go to</p>
          </Row>
          <Row className="mt-3 d-flex text-center">
            <Link to="/" className=" gap-2">
              <Button className='col-sm-6'>Home</Button>
            </Link>
          </Row>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
}

export default NotFoundPage;
