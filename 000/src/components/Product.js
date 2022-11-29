import React from 'react';

//React-router-dom Components
import { Link } from 'react-router-dom';

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

//Components
import Rating from './Rating';

function Product(product) {
  console.log(product);
  return (
   
      <Card className="product">
        <Link to={'/product/' + product.id}>
          <Card.Img
            className="card-img"
            variant="top"
            src={product.images[0]}
            alt={product.title}
          />
        </Link>
        <Card.Body>
          <Link to={'/product/' + product.id}>
            <Card.Title>{product.title}</Card.Title>
          </Link>
          <Card.Text>{product.info}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>€ {product.price} .-</ListGroup.Item>
          <ListGroup.Item>
            <Rating rating={product.rating} />
          </ListGroup.Item>
        </ListGroup>
        <Card.Body className="d-grid gap-2">
          <Card.Link href={'/' + product.id}>Add to cart</Card.Link>
        </Card.Body>
      </Card>
  
  );
}

export default Product;
