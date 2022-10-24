import { useParams } from 'react-router-dom'


function Saludo() {
   let parameters = useParams()
   return <h1>¡Hola {parameters.name}!</h1>
}

export default Saludo;