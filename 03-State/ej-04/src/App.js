/*Crea una aplicación que enseñe el valor de un estado en grande y dos botones para
aumentar y decrementar su valor.*/


import './App.css';
import { useState } from 'react'

function App() {
  let [value, setNumber] = useState(0);

  return (
    <div className='catalogue'>
      <div className='card'>
        <h1>{value}</h1>

        <button onClick={() => setNumber(value + 1)}> + </button>
        <button onClick={() => setNumber(value - 1)}> - </button>
      </div>
    </div>
  )
}


export default App;
