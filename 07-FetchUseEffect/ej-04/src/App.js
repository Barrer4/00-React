
import './App.css';
import { useState, useEffect } from 'react'

function App() {

  let [data, setData] = useState([])
  let [cards, setCards] = useState([])
  let [select, setSelect] = useState('')
  let [loading, setLoading] = useState(false)
  let [loading2, setLoading2] = useState(true)


  useEffect(() => {
    setLoading(true)
    fetch('https://api.magicthegathering.io/v1/sets')
      .then(res => res.json())
      .then(res => {
        setData(res.sets)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    setLoading2(true)
    if (select !== '') {
      fetch(`https://api.magicthegathering.io/v1/cards?set=${select}`)
        .then(res => res.json())
        .then(res => {
          setCards(res.cards)
          setLoading2(false)
        })
    }
  }, [select])

  if (loading) {
    <h2> Loading...</h2>
  } else {
    return (
      <div className="catalogue">
        <h1>Magic</h1>
        <div className='container'>
          <select onChange={(e) => { setSelect(e.target.value) }} >
            {data.map((set, i) => {
              return (
                <option value={set.code} key={i}>{set.name}</option>
              )
            })}
          </select>
          <div className="container">
            {cards.map((card, i) => {
              return (
                <div key={i} className='card'>
                  <img src={card.imageUrl} alt={card.name} />
                  <h3>{card.name}</h3>
                  <p>{card.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
