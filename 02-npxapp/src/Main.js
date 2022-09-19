function Card(props) {
  return (
    <div className='card'>
      <img src={props.cartel} alt={props.titulo}></img>
      <div className='container'>
        <h4>{props.titulo}</h4>
        <p>{props.sinopsis}</p>
      </div>
    </div>
  )
};


function Main(props) {
  return (
    <main className='catalogue'>
      {props.films.map((movie, i) => {
        return (
          <Card
            key={i}
            cartel={movie.cartel}
            titulo={movie.titulo}
            sinopsis={movie.sinopsis}
          />
        )
      })}
    </main>
  )
};

export default Main;


