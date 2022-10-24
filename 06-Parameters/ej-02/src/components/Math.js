import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


function Math() {
   let parameters = useParams()

   return (
      <div className='catalogue'>
         <div className='card'>
            <h3>Suma:</h3>
            <h4>{parameters.value1} + {parameters.value2} = {parseInt(parameters.value1) + parseInt(parameters.value2)}</h4>
            <br />

            <h3>Resta:</h3>
            <h4>{parameters.value1} - {parameters.value2} = {parseInt(parameters.value1) - parseInt(parameters.value2)}</h4>
            <br />

            <h3>Multiplicación:</h3>
            <h4>{parameters.value1} x {parameters.value2} = {parseInt(parameters.value1) * parseInt(parameters.value2)}</h4>
            <br />

            <h3>División:</h3>
            <h4>{parameters.value1} / {parameters.value2} = {parseInt(parameters.value1) / parseInt(parameters.value2)}</h4>
            <br />

            <h3>Resto:</h3>
            <h4>{parameters.value1} % {parameters.value2} = {parseInt(parameters.value1) % parseInt(parameters.value2)}</h4>
            <br />
            
         </div>
         <Link id='link' to={'/'}>Ocultar</Link>
      </div>
   )
}

export default Math