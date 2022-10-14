import './Header.css'
import { Link } from 'react-router-dom';


function Header(props) {
   return (
      <header className='header'>
         <h1>Videoclub</h1>
         <nav>
            <ul>
               <Link to='/'>Home</Link>
            </ul>
         </nav>
      </header>
   )
}

export default Header;