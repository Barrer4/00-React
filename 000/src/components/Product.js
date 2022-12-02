import React from 'react';

//React-router-dom Components
import { Link } from 'react-router-dom';

//Bootstrap Components
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

//Components
import Rating from './Rating';

function Product(props) {
  let {
    id,
    title,
    info,
    price,
    rating,
    images,
  } = props.product;

  let addItem = props.addItem;
  
  return (
    <Card className="product">
      <Link to={'/product/' + id}>
        <Card.Img
          className="card-img"
          variant="top"
          src={images[0]}
          alt={title}
        />
      </Link>
      <Card.Body>
        <Link to={'/product/' + id}>
          <Card.Title>{title}</Card.Title>
        </Link>
        <Card.Text>{info}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>€ {price} .-</ListGroup.Item>
        <ListGroup.Item>
          <Rating rating={rating} />
        </ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-grid gap-2">
        <Button
          onClick={() => addItem(props.product)
          }
        >
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
