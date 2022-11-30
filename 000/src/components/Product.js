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

  return (
    <Card className="product">
      <Link to={'/product/' + props.id}>
        <Card.Img
          className="card-img"
          variant="top"
          src={props.images[0]}
          alt={props.title}
        />
      </Link>
      <Card.Body>
        <Link to={'/product/' + props.id}>
          <Card.Title>{props.title}</Card.Title>
        </Link>
        <Card.Text>{props.info}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>€ {props.price} .-</ListGroup.Item>
        <ListGroup.Item>
          <Rating rating={props.rating} />
        </ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-grid gap-2">
        <Button onClick={()=> props.plusItem(props)}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
