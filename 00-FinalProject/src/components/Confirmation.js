import React from 'react'

//Images
import Sent from '../components/images/feedback/sent.png';

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function Confirmation(props) {
  
  return (
   <Container className='mt-5'>
   <Row>
     <Col md={3}></Col>
     <Col md={6}>
      
    {props.form.name === undefined ? (<Row className="mt-5 d-flex text-center">
    <Row>
         <Image
           style={{
             margin: 'auto',
             justifySelf: 'center',
             width: '70%',
             objectFit: 'contain',
           }}
           src={Sent}
           alt="sent"
         />
       </Row>
           <h3> {'Thank you for signing up'} </h3>
           <p>Enjoy the store!</p>
       
     </Row>) : (<Row className="mt-5 d-flex text-center">
           <h3> {props.form.name + '! Thank you for reaching us'} </h3>
           <p>We will come back to you as soon as possible</p>
       
     </Row>)}
       
     </Col>
     <Col md={3}></Col>
   </Row>
 </Container>
  )
}

export default Confirmation;