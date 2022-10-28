/* a. Utilizar la base de datos de Star Wars (disponible en
  https://swapi.dev/documentation), para obtener la lista de planetas y
  mostrarlos en un dropdown (etiqueta select).
  b. Cuando el usuario elige una opción, mostrar en un párrafo el nombre
  seleccionado. (puede usarse un botón)
  c. En vez de mostrar el párrafo hacer una petición fetch para ver los personajes
  que están en ese planeta y mostrarlos en un div debajo del dropdown.
  d. Hacer la petición */


import './App.css';
import { useEffect, useState } from 'react'


function App() {

  let [data, setData] = useState([])
  let [data2, setData2] = useState([])
  let [data3, setData3] = useState([])
  let [select, setSelect] = useState('')
  let [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    fetch('https://swapi.dev/api/planets/')
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
        setData2(res.residents)
        data.length > 0 ? setLoading(false) : setLoading(true)
      })
  }, [select])

  useEffect(() => {
    setLoading(true)
    Promise.all(data2.map((url) => fetch(url)))
      .then((res) => Promise.all(res.map((res) => res.json())))
      .then((res) => setData3(res))
    data.length > 0 ? setLoading(false) : setLoading(true)
  }, [data2])


  if (loading) {
    return <h2> Loading...</h2>
  } else {
    return (
      <div className='catalogue'>
        <h1>Star Wars</h1>
        <div className='container'>
          <select onChange={(e) => { setSelect(e.target.value) }}>
            {data.map((planet, i) => {
              return (
                <option key={i} value={planet.url}>{planet.name}</option>
              )
            })}
          </select>
          <ul>
            {data3.map((character, i) => {
              return (
                <li key={i}>{character.name}</li>)
            })}
          </ul>
        </div>
      </div>
    )
  };
}

export default App;
