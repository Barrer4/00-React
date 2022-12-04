import React from 'react';

//Boostrap Components
import { Pagination, Container, Row, Col } from 'react-bootstrap';

function Pages(props) {
  let active = props.currentPage;

  let totalPages = Math.ceil(props.totalProducts / props.productsPerPage);

  let pageNumbers = [];
  for (let number = 1; number <= totalPages; number++) {
    pageNumbers.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => props.paginating(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Container className="m-3 justify-content-center">
      <Row>
        <Col></Col>
        <Col>
          <Pagination variation="info">
            {active <= 1 ? (
              <Pagination.First disabled />
            ) : (
              <Pagination.First
                bsprefix="custom-pagBtn"
                onClick={() => props.paginating(1)}
              />
            )}
            {active <= 1 ? (
              <Pagination.Prev bsprefix="custom-pagBtn" disabled />
            ) : (
              <Pagination.Prev
                bsprefix="custom-pagBtn"
                onClick={() => props.paginating(active - 1)}
              />
            )}

            {pageNumbers}

            {active >= totalPages ? (
              <Pagination.Next disabled />
            ) : (
              <Pagination.Next onClick={() => props.paginating(active + 1)} />
            )}

            {active >= totalPages ? (
              <Pagination.Last disabled />
            ) : (
              <Pagination.Last onClick={() => props.paginating(totalPages)} />
            )}
          </Pagination>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Pages;
