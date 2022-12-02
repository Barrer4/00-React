import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Bootstrap Components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

//Components
import Rating from '../components/Rating';
import LoadingStatus from '../components/LoadingStatus';

function ProductPage(props) {
  let params = useParams();
  let { id } = params;

  let url = 'https://dummyjson.com/products/' + id;
  let [product, setProduct] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchproduct() {
      setLoading(true);
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => (
          <div>
            <h1>Error: {error} </h1>
          </div>
        ));
    }
    fetchproduct();
  }, [url]);

  if (loading) {
    return <LoadingStatus />;
  }
  let addItem = props.addItem;
  return (
    <Container className="mt-5 mb-5">
      <Row className="mt-3">
        <Col>
          <h1>{product.title}</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <ListGroup>
            <ListGroup.Item>
              <img
                src={product.thumbnail}
                className="img-large"
                alt={product.title}
              ></img>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6}>
          <ListGroup variant="flush" className="text-end">
            <ListGroup.Item>
              <h2>€{product.price}.-</h2>

              {product.stock < 1 ? (
                <Badge bg="danger">Out of stock</Badge>
              ) : (
                <Badge bg="success">In stock</Badge>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating} />
            </ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
          <div className="mt-4 text-end">
            <Button
              className={product.stock < 1 ? 'disabled w-25' : 'w-25'}
              onClick={() => {
                addItem(product);
              }}
            >
              Add to cart
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;
