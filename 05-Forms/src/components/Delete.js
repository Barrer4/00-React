import { useState } from 'react';

function Delete(props) {

   const [musician, setMusician] = useState('')

   function deleteMusician(musician) {
      let newArray = props.array.filter((player) => { return player.nombre !== musician })
      props.setArray(newArray)
      setMusician('')
   }

   return (
      <>
         <input
            type='text'
            placeholder='Texto'
            value={musician}
            onChange={event => setMusician(event.target.value)}
         />
         <button onClick={() => deleteMusician(musician)}
         >Delete</button>
      </>
   )
};

export default Delete;