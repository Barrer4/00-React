import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
import ErrorStatus from '../components/ErrorStatus';

function ProductPage(props) {
  let params = useParams();
  let { id } = params;
  let addItem = props.addItem;

  let url = 'https://dummyjson.com/products/' + id;
  let [product, setProduct] = useState([]);
  let [loading, setLoading] = useState(false);
  let [feedback, setFeedback] = useState('');

  useEffect(() => {
    async function fetchproduct() {
      setLoading(true);
      let res = await axios(url);
      setProduct(res.data);
      setLoading(false);
    }
    fetchproduct().catch((err) => (setLoading(false), setFeedback(err)));
  }, [url, id]);

  if (loading) {
    return <LoadingStatus />;
  }

  if (feedback !== '') {
    return <ErrorStatus />;
  }


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
              className={product.stock < 1 ? 'disabled col-sm-4' : 'col-sm-4'}
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
