import React, { useState } from 'react';

//Bootstrap Components
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

//Components
import Confirmation from '../components/Confirmation';

function ContactUs() {
  let [form, setForm] = useState({});
  let [errors, setErrors] = useState({});
  let [formValidation, setFormValidation] = useState('')

  let setField = (field, value) => {
    setForm({ ...form, [field]: value });

    if (!!errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  function validateForm() {
    let { name, surname, email, category, comments } = form;
    let newErrors = {};

    if (!name || name === '') {
      newErrors.name = 'Please enter your name';
    }
    if (!surname || surname === '') {
      newErrors.surname = 'Please enter your surname';
    }
    if (
      !email ||
      email === '' ||
      !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!category || category === 'Click to select category') {
      newErrors.category = 'Please select the category';
    }
    if (!comments || comments === '') {
      newErrors.comments = 'Please enter your comments';
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
     ;
    }
  }

  if(formValidation === 'ok')
  {
    return <Confirmation form={form} />
  }
  return (
    <Container className="mt-3">
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="formBasicText"
              aria-required
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                aria-required
                value={form.name}
                onChange={(e) => setField('name', e.target.value)}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter lastname"
                aria-required
                value={form.surname}
                onChange={(e) => setField('surname', e.target.value)}
                isInvalid={!!errors.surname}
              />
              <Form.Control.Feedback type="invalid">
                {errors.surname}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTel">
              <Form.Label>Telephone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter mobile phone"
                /* pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" */
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                aria-required
                value={form.email}
                onChange={(e) => setField('email', e.target.value)}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Select
              aria-label="category"
              value={form.category}
              onChange={(e) => setField('category', e.target.value)}
              isInvalid={!!errors.category}
            >
              <option value="Click to select category">
                Click to select category
              </option>
              <option value="Complain">Complain</option>
              <option value="Request">Request</option>
              <option value="Recommendation">Recommendation</option>
              <option value="Other">Other</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.category}
            </Form.Control.Feedback>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="mt-3">
                Please, write your comments below
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={form.comments}
                onChange={(e) => setField('comments', e.target.value)}
                isInvalid={!!errors.comments}
              />
              <Form.Control.Feedback type="invalid">
                {errors.comments}
              </Form.Control.Feedback>
            </Form.Group>

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
          </Form>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
