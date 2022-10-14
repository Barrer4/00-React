import { Link } from 'react-router-dom';

function Game(props) {

   if (props.full) {
      return (
         <div className='card2'>
            <Link to={'/' + props.title.replaceAll(' ', '-')}></Link>
            <h2>{props.title} </h2>
            <p>{props.gameplay}</p>

         </div>
      )
   } else {
      return (
         <div className='card'>
            <img src={props.image} alt={props.title} />
            <Link to={'/' + props.title.replaceAll(' ', '-')}><h2>{props.title} </h2></Link>
         </div>
      )
   }
}

export default Game;