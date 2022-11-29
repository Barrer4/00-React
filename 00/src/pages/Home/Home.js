/* import React from 'react';

//Style
import './Home.css';
//Components
import { Button, Spinner, Row, Container } from 'react-bootstrap';
import Cards from '../../components/Card/Cards';
import ControlledCarousel from '../../components/Carousel';
import Pagination from '../../components/Pagination/Pagination';

function Home(props) {
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      await fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setProducts(res.products);
          setTotalProducts(res.total);
          setLoading(false);
        });
    }
    fetchProducts();
  }, [url, select]);

  if (props.loading) {
    return (
      <Button className="loading-btn" variant="default" disabled>
        <Spinner size="sm" animation="border" variant="dark" />
        <p className="loading-p">Loading...</p>
      </Button>
    );
  }

  return (
    <>
      <ControlledCarousel />

      <Container>
        <Row className="row-cstm">
          {props.products.map((product, i) => {
            return (
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
            );
          })}
        </Row>
      </Container>

      <Pagination
        products={props.currentProducts}
        totalProducts={props.totalProducts}
        currentPage={props.currentPage}
        productsPerPage={props.productsPerPage}
        paginate={props.paginate}
      />
    </>
  );
}

export default Home;
 */