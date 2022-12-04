import React, { useState } from 'react';

//Bootstrap Components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Search(props) {
  let [input, setInput] = useState('');

  function handleEnter(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      props.search(input);
    }
  }

  return (
    <Form className="search-bar">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={(event) => setInput(event.target.value)}
        onKeyPress={handleEnter}
      />
      <Stack direction="horizontal" gap={2}>
        <Button
          id="search-btn"
          variant="outline-info"
          onClick={() => props.search(input)}
        >
          Search
        </Button>
      </Stack>
    </Form>
  );
}

export default Search;
