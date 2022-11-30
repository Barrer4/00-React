import React, { useEffect, useState } from 'react';

//Components
import LoadingStatus from '../components/LoadingStatus';
import Product from '../components/Product';
import Pagination from '../components/Pagination';
import Slides from '../components/Slides';

//Bootstrap Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';

function HomePage(props) {
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
      await fetch(props.url)
        .then((res) => res.json())
        .then((res) => {
          setProducts(res.products);
          setTotalProducts(res.total);
          setLoading(false);
        });
    }
    fetchProducts();
  }, [props.url]);

  if (loading) {
    return <LoadingStatus />;
  }

  return (
    <>
      <Slides props={props} />
      <Container className="mt-5">
        <Row className="row-cstm">
          {products.map((product, i) => (
            <Col key={i} sm={6} md={4} lg={3} className="mb-3 text-center">
              <Product
                id={product.id}
                title={product.title}
                info={product.description}
                price={product.price}
                discount={product.discountPercentage}
                rating={product.rating}
                stock={product.stock}
                brand={product.brand}
                category={product.category}
                thumbnail={product.thumbnail}
                images={product.images}
                cartItems={props.cartItems}
                setCartItems={props.setCartItems}
                plusItem={props.plusItem} 
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
    </>
  );
}

export default HomePage;
