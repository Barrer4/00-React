/*Genera un componente “libro” por cada uno de los libros a mostrar en el
componente Main.*/

import './Main.css';
import { useState } from 'react'

function Libro(props) {
   let [stock, setStock] = useState(3);
   return (
      <div className='card'>
         <p id='id'>{props.id} </p>
         <img src={props.format} alt={props.title} />
         <h4>{props.title}</h4>
         <p>Author: {props.author.map((author) => <p>{author.name}</p>)}</p>
         <p>Subjects: {props.subjects}</p>
         <div className='stock'>
            <h4>Stock: {stock > 0 ? stock : '0'}</h4>
            {stock > 0 ? <button onClick={() => setStock(stock - 1)}> - </button> : <button disabled> - </button>}
         </div>
      </div>
   )
}

function Main(props) {
   return (
      <main className='catalogue'>
         {props.books.map((book, i) => {
            return (
               <Libro
                  key={i}
                  id={book.id}
                  title={book.title}
                  author={book.authors}
                  subjects={book.subjects}
                  format={book.formats['image/jpeg']}

               />
            )
         })}
      </main>
   )
};

export default Main;
