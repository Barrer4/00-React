import React from 'react'

//Images
import Paid from '../components/images/feedback/paid.png';

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function CheckOut(props) {
  
  props.signOut()
  
  return (
   <Container className='mt-5'>
   <Row>
     <Col md={3}></Col>
     <Col md={6}>
      
  <Row className="mt-5 d-flex text-center">
    <Row>
         <Image
           style={{
             margin: 'auto',
             justifySelf: 'center',
             width: '70%',
             objectFit: 'contain',
           }}
           src={Paid}
           alt="paid"
         />
       </Row>
           <h3> Thank you for choosing us</h3>
           <p>Your support means a lot to us!</p>
       
     </Row>
       
     </Col>
     <Col md={3}></Col>
   </Row>
 </Container>
  )
}

export default CheckOut;