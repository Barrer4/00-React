import React from 'react';
import { Link } from 'react-router-dom';

//Image
import Boom from './images/boom.png';

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function ErrorStatus(props) {
  return (
    <Container>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Row>
            <Image
              style={{
                margin: 'auto',
                justifySelf: 'center',
                width: '100%',
                objectFit: 'contain',
              }}
              src={Boom}
              alt="boom"
            />
          </Row>
          <Row className="mt-3 d-flex text-center">

          {props.error ? (
            <>
              <h3> We do not have the product you are looking for. </h3>
              <p>Please, try another search</p>{' '}
            </>
          ) : (
            <h2>It seems the server could not handle your awesomeness!</h2>
          )}
        </Row>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
}

export default ErrorStatus;
