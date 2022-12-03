import React, { useEffect, useState } from 'react';
import axios from 'axios';

//Components
import LoadingStatus from '../components/LoadingStatus';
import Product from '../components/Product';
import Pagination from '../components/Pagination';
import Slides from '../components/Slides';
import ErrorStatus from '../components/ErrorStatus';
import Search from '../components/Search';

//Bootstrap Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage(props) {
  let { url, setUrl, addItem, cartItems, category } = props;
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [productsPerPage] = useState(12);
  let [totalProducts, setTotalProducts] = useState('');
  let [feedback, setFeedback] = useState('');

  //Page selection
  function paginating(pageNumber) {
    return (
      setCurrentPage(pageNumber),
      setUrl(
        `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
          productsPerPage * (pageNumber - 1)
        }`
      )
    );
  }

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);

      let res = await axios(url);
      setProducts(res.data.products);
      setTotalProducts(res.data.total);
      setLoading(false);
    }
    fetchProducts().catch(
      (err) => (setLoading(false), setFeedback(err), console.log(err))
    );
  }, [url, category]);

  if (loading) {
    return <LoadingStatus />;
  }
  if (feedback) {
    return <ErrorStatus   />;
  }

  if (products.length === 0) {
    return <ErrorStatus error='product not found'/>;
  }
  return (
    <>
      <Navbar className="navbar-search" bg="default" expand="lg">
        <Search search={props.search} />
      </Navbar>

      <Slides />
      <Container className="mt-5">
        <Row>
          <h4>{cartItems}</h4>
        </Row>
        <Row className="row-cstm">
          {products.map((product) => (
            <Col
              key={product.id}
              sm={6}
              md={4}
              lg={3}
              className="mb-3 text-center"
            >
              <Product product={product} addItem={addItem} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Pagination
              products={products}
              totalProducts={totalProducts}
              currentPage={currentPage}
              productsPerPage={productsPerPage}
              paginating={paginating}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
