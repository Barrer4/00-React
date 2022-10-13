/*Crea una aplicación que tenga 9 botones, 3 por fila, y que empiecen sin texto dentro.
Al pulsar en el primer botón, se mostrará una X como su texto. Si se vuelve a pulsar
no pasará nada. Al pulsar el segundo botón que siga vacío se mostrará una O como
su texto. Si alguien consigue poner 3 X o 3 Os seguidas, di que han ganado las Xs o
las Os (un tres en raya). Para poder hacer el ejercicio, no crees componentes
simplemente hazlo todo dentro un solo componente. */

import { useState } from 'react';
import './App.css';

function App() {
  let [square, setsquare] = useState([])
  let [player, setPlayer] = useState('X')

  function turn(i) {
    console.log(square)
    let array = [...square]
    if (array[i] === undefined) {
      array[i] = player
      player === 'O' ? setPlayer('X') : setPlayer('O')
      setsquare(array)
    }
  }

  let winner = winnerCheck()

  function winnerCheck() {
    //Verificación horizontal:
    if (square[0] && square[0] === square[1] && square[0] === square[2]) {
      return (<p>The winner is: {square[0]}</p>)
    } else if (square[3] && square[3] === square[4] && square[3] === square[5]) {
      return (<p>The winner is: {square[3]}</p>)
    } else if (square[6] && square[6] === square[7] && square[6] === square[8]) {
      return (<p>The winner is: {square[6]}</p>)

      //Verificación vertical:
    } else if (square[0] && square[0] === square[3] && square[0] === square[6]) {
      return (<p>The winner is: {square[0]}</p>)
    } else if (square[1] && square[1] === square[4] && square[1] === square[7]) {
      return (<p>The winner is: {square[1]}</p>)
    } else if (square[2] && square[2] === square[5] && square[2] === square[8]) {
      return (<p>The winner is: {square[2]}</p>)

      //Verificación diagonal:
    } else if (square[0] && square[0] === square[4] && square[0] === square[8]) {
      return (<p>The winner is: {square[0]}</p>)
    } else if (square[6] && square[6] === square[4] && square[6] === square[2]) {
      return (<p>The winner is: {square[6]}</p>)
    } else {
      return (<p>Active player: {player}</p>) 
    }
  }

  return (

    <div className='game'>
      <h1 className='title'> tic-tac-toe game </h1>
      <div className='game-board'>
        <div className="board-row">
          <button className='square' onClick={() => turn(0)}>{square[0]}</button>
          <button className='square' onClick={() => turn(1)}>{square[1]}</button>
          <button className='square' onClick={() => turn(2)}>{square[2]}</button>
        </div><div className="board-row">
          <button className='square' onClick={() => turn(3)}>{square[3]}</button>
          <button className='square' onClick={() => turn(4)}>{square[4]}</button>
          <button className='square' onClick={() => turn(5)}>{square[5]}</button>
        </div><div className="board-row">
          <button className='square' onClick={() => turn(6)}>{square[6]}</button>
          <button className='square' onClick={() => turn(7)}>{square[7]}</button>
          <button className='square' onClick={() => turn(8)}>{square[8]}</button>
        </div>
      </div>
      <div className='winner'>
      {winner}
      </div>
    </div>


  );


  }
  export default App;
