import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Math from './components/Math'

function App() {
  let [value1, setValue1] = useState(0)
  let [value2, setValue2] = useState(0)

  return (
    <BrowserRouter className="App">
      <div className='catalogue'>
        <div className='card'>
          <h1>{value1}</h1>
          <button onClick={() => setValue1(value1 + 1)}> + </button>
          <button onClick={() => setValue1(value1 - 1)}> - </button>
        </div>

        <div className='card'>
          <h1>{value2}</h1>
          <button onClick={() => setValue2(value2 + 1)}> + </button>
          <button onClick={() => setValue2(value2 - 1)}> - </button>
        </div>

        <Link id='link' to={`/math/${value1}/${value2}`}>Calcular</Link>

        <button onClick={() => { setValue1(0); setValue2(0) }}>Reset</button>
      </div>

      <Routes>
        < Route
          path='math/:value1/:value2'
          element={< Math />} />

        {/*  < Route
          path='*'
          element={< h2 > 404: Page not found.</h2 >}
        /> */}

      </Routes >
    </BrowserRouter >
  )
}

export default App
