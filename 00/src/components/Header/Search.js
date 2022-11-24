import React from 'react'
import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'


function Search() {

   let [srch, setSrch] = useState('')
   /* let [loading, setLoading] = useState(false) */

   useEffect(() => {
      /* setLoading(true) */
      fetch('https://dummyjson.com/products/search?q=' + srch)
         .then(res => res.json())
         .then(res => setSrch(res.products))
         .catch(err => console.log(('🔴 Error: ' + err)))
   }, [])


   return (
      <>
         <Form className="d-flex">
            <Form.Control
               id="searchInput"
               type="search"
               placeholder="Search"
               className="me-2"
               aria-label="Search"
               onChange={() => setSrch('')}
            />
            <Button
               style={{ marginRight: '0.5rem' }}
               variant="outline-success"
               onClick={srch.target.value}>
               Search
            </Button>
         </Form>

         <Button
            style={{ marginRight: '0.5rem' }}
            variant="outline-success">
            Sign In
         </Button>
         <Button
            variant="outline-success">
            Log In
         </Button>
      </>
   )
}

export default Search