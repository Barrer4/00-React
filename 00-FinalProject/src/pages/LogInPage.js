import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


//Bootstrap Components
import { Form, Button, Col, Container, Row } from 'react-bootstrap';

function LogInPage(props) {
  let [email, setEmail] = useState('');
  let [pass, setPass] = useState('');
  let { logIn } = props;

  async function userCheck(e) {
    e.preventDefault();
    try {
      let res = await axios('https://dummyjson.com/users/search?q=' + email);
      let user = res.data.users[0];
      if (res.data.users.length < 1) {
        toast.error('Credentials error');
      }
      if (user.password !== pass) {
        toast.error('Credentials error');
      } else {
        logIn(user);
      }
    } catch (err) {
      toast.error(err);
    }
  }

  return (
    <Container className="mt-3">
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPass(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2 justify-content-center">
              <Button
                className="mt-3 d-grid gap-2 col-sm-12 btn-block"
                variant="primary"
                type="submit"
                onClick={userCheck}
              >
                Log in
              </Button>

              <Form.Text className="text-muted mt-3">
                Don't have an account?!
              </Form.Text>

              <Link to="/signin">
                <Button variant="secondary col-sm-12 btn-block" type="submit">
                  Create Account
                </Button>
              </Link>
            </div>
          </Form>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
}

export default LogInPage;
