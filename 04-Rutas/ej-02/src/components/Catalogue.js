
import Movie from "./Movie";

function Catalogue(props) {
  return (
    <div className='catalogue'>
      {props.catalogue.map((movie, i) => {
        return (<Movie full={false} cartel={movie.cartel} titulo={movie.titulo} />)
      })}
    </div>
  )
};

export default Catalogue;


