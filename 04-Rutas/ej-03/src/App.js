/*Crea una aplicación que recoja tus 6 videojuegos favoritos.
a. Crea una ficha para cada uno de los videojuegos con un link para ampliar
información y en la página principal muestra tus 6 favoritos.
b. Después crea las rutas que muestran información detallada de cada
videojuego.*/


import './App.css';
import { useState } from 'react';
import videogames from './data/videogames';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Components:
import Header from './components/Header';
import Catalogue from './components/Catalogue';
import Game from './components/Game';


function App() {
  const [catalogue] = useState(videogames)
  return (
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/' element={<Catalogue catalogue={catalogue} />} />
        {catalogue.map((game, i) => {
           return (
            <Route
              path={'/' + game.title.replaceAll(' ', '-')}
              element={<Game key={i} full={true} image={game.image} title={game.title} gameplay={game.gameplay} />} />
          )
        })}
        </Routes>
      </BrowserRouter>
  )
    ;
}

export default App;
