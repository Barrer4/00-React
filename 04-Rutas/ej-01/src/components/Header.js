import './Header.css'
import { Link } from 'react-router-dom';

function Header(props) {
   return (
      <header className='header'>
         <nav>
            <ul>
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/months'>Months</Link></li>
               <li> <Link to='/days'>Days</Link></li>
            </ul>
         </nav>
      </header>
   )
}

export default Header;