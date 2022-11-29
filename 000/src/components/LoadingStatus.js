import React from 'react';

//Bootstrap Components
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

function LoadingStatus() {
  return (
   <Row className="mt-3 d-flex justify-content-center">
    <Spinner size="lg" animation="border" role="status" variant="dark">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </Row>
  );
}

export default LoadingStatus;
