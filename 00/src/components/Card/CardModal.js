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
      <Modal.Header id="pdctModal">
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
        <Button onClick={props.close}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}




export default ProductInfo;
