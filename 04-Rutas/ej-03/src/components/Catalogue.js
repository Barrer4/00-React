
import Game from "./Game";

function Catalogue(props) {
   return (
      <div className='catalogue'>
         {props.catalogue.map((game, i) => {
            return (
               <Game
                  full={false}
                  image={game.image}
                  title={game.title}
                  gameplay={game.gameplay} />)
         })}
      </div>
   )
};

export default Catalogue;


