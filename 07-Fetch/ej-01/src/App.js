/*Haz una llamada a la API https://rickandmortyapi.com/api/character/ para que devuelva todos los personajes. Muestra en un div las fotos y los nombres y añade un
botón de página siguiente que muestre los siguientes 10 personajes y un botón de página anterior que muestre los 10 personajes anteriores.*/


import './App.css'
import { useEffect, useState } from 'react'


function App() {
  let [data, setData] = useState([])
  let [url, setUrl] = useState("https://rickandmortyapi.com/api/character/")
  let [next, setNext] = useState('')
  let [prev, setPrev] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => (
        setData(res.results),
        setNext(res.info.next),
        setPrev(res.info.prev) 
      ))
  }, [url])

  return (
    <>

      <div className='catalogue'>
        <h1>Rick & Morty</h1>
        <div className='container'>

          {data.map((character, index) => {
            return (
              <div key={character.id} className='card'>
                <img src={character.image} alt={character.name} />
                <h3>{character.name}</h3>
              </div>
            )
          })}
        </div>
        {(prev === null)
          ? <button disabled>Previous</button>
          : <button onClick={() => setUrl(prev)}>Previous</button>}

        {(next !== null)
          ? <button onClick={() => setUrl(next)}>Next</button>
          : <button disabled>Next</button>}
      </div>
    </>
  )
}

export default App;
