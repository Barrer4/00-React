import { Link } from 'react-router-dom'

function Movie(props) {

  if (props.full) {
    return (
      <div className='card'>
        <img src={props.cartel} alt={props.titulo} />

        <Link to={'/' + props.titulo.replaceAll(' ', '-')}></Link>
        <h2>{props.titulo}</h2>
        <p>{props.sinopsis}</p>
      </div>
    )
  } else {
    return (
      <div className='card'>
        <img src={props.cartel} alt={props.titulo} />

        <Link to={'/' + props.titulo.replaceAll(' ', '-')}><h2>{props.titulo}</h2></Link>
      </div>
    )
  }

};


export default Movie;