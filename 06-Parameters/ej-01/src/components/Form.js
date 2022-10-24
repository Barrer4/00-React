import { useState } from "react"

const [input, setInput] = useState('')
function Form() {
   return (
      <div>
         <input
            type='text'
            placeholder='Introduzca su nombre'
            value={input}
            onChange={event => setInput(event.target.value)}
         />

         <button
            onClick={event => {
               <p>¡Hola {setInput}!</p>
            }}
         >Enviar</button>
      </div>
   )
}

export default Form;

