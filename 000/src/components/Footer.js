import React from 'react'

//Bootstrap Components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'


function Footer() {
  return (
   <Card className="text-center">
   <Card.Header as="h5">Featured</Card.Header>
   <Card.Body>
     <Card.Title>Special title treatment</Card.Title>
     <Card.Text>
       All rights reserved.
     </Card.Text>
     <Button variant="primary">Go somewhere</Button>
   </Card.Body>
 </Card>
  )
}

export default Footer