/*En la cabecera, muestra el nombre de la biblioteca y los datos del usuario. Si
es Vip, tendrá un saludo además.*/

import './Header.css';
import { useState } from 'react'

function Header(props) {
   let [vip, setVip] = useState(props.users.vip);

   return (
      <header className='header'>
         <h1>Pérez Galdós Library</h1>
         <div className='user'>
            <img src={props.users.imagen} alt={props.users.nombre} />
            <h2> {vip ? 'Hi ' + props.users.nombre + '!' : props.users.nombre}</h2>
            {vip === false ? <button onClick={() => setVip(true)}> Upgrade to VIP </button> : <button onClick={() => setVip(false)}> Downgrade </button>}
         </div>

      </header>
   )
};

export default Header;