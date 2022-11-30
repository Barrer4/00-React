import React, { useEffect, useState } from 'react';

//Bootstrap Components
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';

function Categories(props) {
  let url = 'https://dummyjson.com/products/categories';
  let [show, setShow] = useState(false);
  let [loading, setLoading] = useState(false);
  let [categories, setCategories] = useState([]);
  let [select, setSelect] = useState('');

  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);
      await fetch(url)
        .then((res) => res.json())
        .then((res) => {
          let categories = res.map((category) => {
            return (
              category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
            );
          });
          setCategories(categories);
          setSelect(select);
          setLoading(false);
        });
    }
    fetchCategories();
  }, [url, select]);

  if (loading) {
    return (
      <Nav.Link variant="default" disabled>
        {' '}
        Loading...{' '}
      </Nav.Link>
    );
  }

  return (
    <>
      <Nav.Link variant="primary" onClick={handleShow}>
        Categories
      </Nav.Link>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header variant="primary" closeButton>
          <Offcanvas.Title >CARA Store</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h5>Categories</h5>
          {categories.map((category, i) => {
            return (
              <Nav.Link
                className="mt-2"
                href={'/category/' + category}
                key={i}
                id={`${i}-link-offcanvas`}
                value={category}
                onClick={() => {
                  return (handleClose(), props.filterByCategory(category));
                }}
              >
                {category}
              </Nav.Link>
            );
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Categories;
