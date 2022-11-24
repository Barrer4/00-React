import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { useEffect, useState } from 'react'




function Categories() {


   {
      categories.map((category, i) => {
         return (
            <NavDropdown.Item href="" key={i}>{category}</NavDropdown.Item>

         )
      })
   }
}

export default Categories