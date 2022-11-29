import { Modal, Button } from "react-bootstrap";



function ProductInfo(props) {

  return (
    <Modal
      show={props.show}
      close={props.close}
      info={props.info}
      backdrop="static"
      keyboard={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>{props.info.title}</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>{props.info.price}.-</h3>
        <p>{props.info.info}</p>
        <p>{props.info.stock}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='info' onClick={props.close}>Close</Button>
        <Button variant='primary' style={{color: 'var(--light_t3)'}} onClick={props.close}>Add to cart</Button>
      </Modal.Footer>
    </Modal>
  );
}




export default ProductInfo;
