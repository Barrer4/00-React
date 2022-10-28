/* a. Obtener de la API de Pokemon (disponible en https://pokeapi.co/api/v2/ ) la
lista de todos los tipos de Pokémon y mostrarlos en una lista desordenada.
b. Mostrar un dropdown en el que el usuario puede especificar un tipo.
c. Cuando el usuario elija un tipo específico en el dropdown, mostrar 3
pokemons aleatorios que sean de ese tipo. */


import './App.css';
import { useState, useEffect } from 'react'


function App() {

  let [data, setData] = useState([])
  let [data2, setData2] = useState([])
  let [data3, setData3] = useState([])
  let [select, setSelect] = useState('')
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://pokeapi.co/api/v2/type')
      .then(res => res.json())
      .then(res => {
        setData(res.results)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    setLoading(true)
    fetch(select)
      .then(res => res.json())
      .then(res => {
        let data2 = res.pokemon
        for (let i = 0; i < 3; i++) {
          data3.push(data2[Math.floor(Math.random() * data2.length)].pokemon.name)
        }
        setData3(data3)
        data2.length > 0 ? setLoading(false) : setLoading(true)

       
      })
  }, [select])


  if (loading) {
    <h2>  Loading...</h2>
  } else {
    return (
      <div className='catalogue'>
        <h1>Pokemon</h1>
        <div className='container'>
          <select onChange={(e) => { setSelect(e.target.value) }} >
            {data.map((type, i) => {
              return (
                <option key={i} value={type.url}>{type.name}</option>
              )
            })}
          </select>
          <ul>
            {data3.map((pkmon, i) => { return (
              <li key={i}>{pkmon}</li>
            )})}
          </ul>
         
        </div>
      </div>
    )
  }
}





export default App;
