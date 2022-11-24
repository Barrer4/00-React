import { Button, Card } from 'react-bootstrap'
import { useState } from 'react'

//Style
import './Cards.css'

//Components
import CardModal from './CardModal'


function Cards(props) {

  let [showInfo, setShowInfo] = useState(false)

  return (
    <Card className="cardPrdct">
      <Card.Img className="cardImg"
        variant="top"
        src={props.image[0]}
        alt={props.title}
      />
      <Card.Body
        className="cardBdy">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         
          <h3>{props.price}.-</h3>
        </Card.Text>
  
      </Card.Body>
      <div className="d-grid gap-2">
        <Button className="cardBtn" variant="primary" size="sm" onClick={()=> setShowInfo(true)} >Know more</Button>
        <Button className="cardBtn" variant="primary" size="sm">Add to cart</Button>
      </div>
      <CardModal show={showInfo} info={props} close={() => { setShowInfo(false) }} />
    </Card>
  )
}

export default Cards