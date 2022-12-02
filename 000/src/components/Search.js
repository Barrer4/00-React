import React from 'react';

//Bootstrap Components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function Search() {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Stack direction="horizontal" gap={2}>
        <Button variant="outline-success">Search</Button>
        <div className="vr" />
      </Stack>
    </Form>
  );
}

export default Search;
