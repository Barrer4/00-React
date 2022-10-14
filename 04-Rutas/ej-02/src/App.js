/*Crea una aplicación en la que guardes en el state el array ‘peliculas’.
a. Crea un componente en el que muestres todas las películas: título e imagen
y que se vea al entrar a la aplicación (“/”).
b. Después crea un componente por cada película y, al hacer click en
cualquiera de los títulos, nos llevará a la ruta de cada película, donde
también aparecerá la sinopsis.*/

import './App.css';
import { useState } from 'react'
import videoclub from './data/videoclub.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components:
import Header from './components/Header';
import Catalogue from './components/Catalogue';
import Movie from './components/Movie';


function App() {
  const [catalogue] = useState(videoclub)
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Catalogue catalogue={catalogue} />} />
        {catalogue.map((movie, i) => {
          return (
            <Route
              path={'/' + movie.titulo.replaceAll(' ', '-')}
              element={<Movie full={true} cartel={movie.cartel} titulo={movie.titulo} sinopsis={movie.sinopsis} />} />
          )
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
