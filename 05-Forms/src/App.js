import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

//Components
import Musicians from './components/Musicians';
import Delete from './components/Delete';



function App() {

  const [input, setInput] = useState('')

  const [array, setArray] = useState([
    {
      nombre: 'Wolfgang Amadeus Mozart',
      fecha: 1756,
      canciones: ['Symphonie Nr 40', 'Don Giovanni']
    },
    {
      nombre: 'Ludwig van Beethoven',
      fecha: 1770,
      canciones: ['Symphonie No.5', 'Piano Sonata No.32']
    },
    {
      nombre: 'Johann Sebastian Bach',
      fecha: 1685,
      canciones: ['Vivace', 'Largo ma non tanto']
    }
  ]);



  return (

    <BrowserRouter className="App">
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/delete'>Delete</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/'
          element={
            <>
              <Musicians musicians={array} />
              <input
                type='text'
                placeholder='Texto'
                value={input}
                onChange={event => setInput(event.target.value)}
              />
              <button onClick={event => {
                let newArray = [...array]
                newArray.push({ nombre: input })
                setArray(newArray)
                setInput('')
              }}>Add
              </button>
            </>
          } />

        <Route
          path='/delete'
          element={<Delete array={array} setArray={setArray} />}
        />
      </Routes>
    </BrowserRouter >


  )
};


export default App;
