import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Components

import LoadingStatus from '../components/LoadingStatus';
import Product from '../components/Product';
import Pagination from '../components/Pagination';

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
  );
}

export default CategoryPage;
