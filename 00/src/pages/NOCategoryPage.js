import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Components

import LoadingStatus from '../../../000/src/components/LoadingStatus';
import Product from '../../../000/src/components/Product';
import Pagination from '../../../000/src/components/Pagination';

function CategoryPage(props) {
  let params = useParams();
  let { category } = params;

  let url = 'https://dummyjson.com/products/category/' + category;
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [productsPerPage] = useState(12);
  let [totalProducts, setTotalProducts] = useState('');

  //Page selection
  function paginating(pageNumber) {
    return (
      setCurrentPage(pageNumber),
      props.setUrl(
        `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
          productsPerPage * (pageNumber - 1)
        }`
      )
    );
  }

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      await fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setProducts(res.products);
          props.filterByCategory(category);
          setTotalProducts(res.total);
          setLoading(false);
        });
    }
    fetchProducts();
  }, [url]);

  if (loading) {
    return <LoadingStatus />;
  }

  return (
    <Container className="mt-5">
      <Row className="row-cstm">
        {products.map((product, i) => (
          <Col
            key={product.id}
            sm={6}
            md={4}
            lg={3}
            className="mb-3 text-center"
          >
            <Product
              product={product}
              cartItems={props.cartItems}
              setCartItems={props.setCartItems}
              addItem={props.addItem}
            />
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
  );
}

export default CategoryPage;
