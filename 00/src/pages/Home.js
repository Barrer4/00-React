import React from 'react'


//Components
import { Button, Spinner, Col, Row, Container } from 'react-bootstrap'
import Cards from '../components/Card/Cards'
import ControlledCarousel from '../components/Carousel'
import Pagination from '../components/Pagination'


function Home(props) {

  if (props.loading) {
    return (
      <Button variant="info" disabled style={{ margin: 'auto', width: '100%', textAlign: 'Center' }}>
        <Spinner animation="border" variant="light" />
      </Button>
    )
  }

  return (
    <>
      <ControlledCarousel />

      <Container >
        <Row>
          {props.products.map((product, i) => {

            return (
              <Col>
                <Cards
                  key={i}
                  title={product.title}
                  info={product.description}
                  price={product.price}
                  discount={product.discount}
                  rating={product.rating}
                  stock={product.stock}
                  brand={product.brand}
                  category={product.category}
                  thumbnail={product.thumbnail}
                  image={product.images}
                />
              </Col>
            )
          })}

        </Row>
      </Container>

      <Pagination
        products={props.currentProducts}
        totalProducts={props.totalProducts}
        currentPage={props.currentPage}
        productsPerPage={props.productsPerPage}
        paginate={props.paginate} />

    </>)
}


export default Home;