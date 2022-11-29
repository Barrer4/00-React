import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';

//Style
import './Cards.css';

//Components
import CardModal from './CardModal';

function Cards(props) {
  let [showInfo, setShowInfo] = useState(false);

  return (
    <Card className="card-prdct">
      <Card.Img
        className="card-img"
        variant="top"
        src={props.image[0]}
        alt={props.title}
      />
      <Card.Body className="card-bdy">
        <Card.Title>
          <h4>{props.title}</h4>
        </Card.Title>
        <Card.Text>
          <p>{props.price}.-</p>
        </Card.Text>
      </Card.Body>
      <div className="d-grid gap-2">
        <Button
          className="cardBtn"
          variant="default"
          size="sm"
          onClick={() => setShowInfo(true)}
        >
          Know more
        </Button>
        <Button className="cardBtn" variant="primary" size="sm">
          Add to cart
        </Button>
      </div>
      <CardModal
        show={showInfo}
        info={props}
        close={() => {
          setShowInfo(false);
        }}
      />
    </Card>
  );
}

export default Cards;
