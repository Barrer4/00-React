/*Declara en tu aplicación un array con los 3 pokemon : Charmander, Bulbasur,
Squirtle. Después muestralos leyéndonos del array como <li> dentro de un <ul>.*/


import './App.css';
import pokemon from './pokemon'
import Main from './Main'

function App() {
  return (
    <Main pkmon={pokemon} />
  );
}

export default App;
