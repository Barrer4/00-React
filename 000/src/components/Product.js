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
  let { id, info, price, stock, rating, images, title } = props.product;

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
      <Card.Body></Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='product-list'>
          <Link to={'/product/' + id}>
            <Card.Title className="card-body">{title}</Card.Title>
          </Link>
        </ListGroup.Item >
        <ListGroup.Item className='product-list'>€ {price} .-</ListGroup.Item>
        <ListGroup.Item>
          <Rating rating={rating} />
        </ListGroup.Item>
      </ListGroup>
      <Card.Body className="body-btn d-grid gap-2">
        <Button
          className={
            stock < 1 ? 'disabled col-sm-12 btn-block' : 'col-sm-12 btn-block'
          }
          variant={stock < 1 ? 'default' : 'primary'}
          onClick={() => addItem(props.product)}
        >
          {stock < 1 ? 'Out of Stock' : 'Add to cart'}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
