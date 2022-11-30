import React from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';





export default function Categories(props) {
   let [show, setShow] = useState(false);

   let handleClose = () => setShow(false);
   let handleShow = () => setShow(true);

   if (props.loading) {
      return (
         <Button variant="light" disabled >
            Loading...
         </Button>
      )
   }
   return (
      <>
         <Nav.Link variant="primary" onClick={handleShow}>
            Categories
         </Nav.Link>

         <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header variant='primary' closeButton>
               <Offcanvas.Title>Lala Store</Offcanvas.Title>

            </Offcanvas.Header>
            <Offcanvas.Body>
               <h5>Categories</h5>
               {
                  props.categories.map((category, i) => {
                     return (

                        <Nav.Link
                           key={i}
                           id={`${i}-link-offcanvas`}
                           value={category}
                           onClick={() => {
                              return (handleClose(), props.filterByCategory(category))
                           }}>{category}
                        </Nav.Link>
                     )
                  })
               }
            </Offcanvas.Body>
         </Offcanvas>
      </>
   )
}

