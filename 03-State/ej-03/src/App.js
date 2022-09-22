/*Crea una página en la que mostremos los datos de 4 casas diferentes. Almacena los
datos en un archivo de servicio ( como objetos de un array ) y después genera un
componente por cada una de las casas de forma automática.*/

import './App.css';
import properties from './houses.js'
import Main from './Main'

function App() {
  return (
    <Main data={properties} />
  );
}

export default App;
