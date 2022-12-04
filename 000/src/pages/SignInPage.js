import React, { useState } from 'react';
import axios from 'axios';

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Confirmation from '../components/Confirmation';

function SignInPage() {
  let [newUser, setNewUser] = useState({});

  let [errors, setErrors] = useState({});
  let [formValidation, setFormValidation] = useState('');

  let setField = (field, value) => {
    setNewUser({ ...newUser, [field]: value });

    if (!!errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  function validateForm() {
    let { firstName, lastName, email, pass, password, address } = newUser;

    let newErrors = {};

    if (!firstName || firstName === '') {
      newErrors.firstName = 'Please enter your name';
    }
    if (!lastName || lastName === '') {
      newErrors.lastName = 'Please enter your lastname';
    }
    if (
      !email ||
      email === '' ||
      !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!address || address === '') {
      newErrors.address = 'Please enter your preferred delivery address';
    }

    if (!pass || pass === '') {
      newErrors.pass = 'Please enter a password';
    }

    if (!password || password === '') {
      newErrors.password = 'Please re-enter your password';
    }

    if (pass !== password) {
      newErrors.password = 'The passwords do not match';
    }

    return newErrors;
  }

  function sendForm(e) {
    e.preventDefault();
    let formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setFormValidation('ok');
    }
  }

  if (formValidation === 'ok') {
    userSignIn(newUser);
    return <Confirmation form={newUser} />;
  }

  async function userSignIn(e) {
    await axios
      .post('https://dummyjson.com/users/add', {
        newUser,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Container className="mt-3">
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="newuser-name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                aria-required
                value={newUser.firstName}
                onChange={(e) => setField('firstName', e.target.value)}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="newuser-lastname">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter lastname"
                aria-required
                value={newUser.lastName}
                onChange={(e) => setField('lastName', e.target.value)}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="newuser-email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                aria-required
                value={newUser.email}
                onChange={(e) => setField('email', e.target.value)}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="newuser-password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                aria-required
                value={newUser.pass}
                onChange={(e) => setField('pass', e.target.value)}
                isInvalid={!!errors.pass}
              />
              <Form.Control.Feedback type="invalid">
                {errors.pass}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="newuser-pass">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Re-enter password"
                aria-required
                value={newUser.password}
                onChange={(e) => setField('password', e.target.value)}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="newuser-address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="1234 Main St"
                aria-required
                value={newUser.address}
                onChange={(e) => setField('address', e.target.value)}
                isInvalid={!!errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
          <Row>
            <Col></Col>

            <Button
              className="col-sm-3"
              variant="primary"
              type="submit"
              onClick={sendForm}
            >
              Send form
            </Button>

            <Col></Col>
          </Row>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
}

export default SignInPage;
