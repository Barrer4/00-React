
import './App.css';
import movielist from './data/videoclub.js';

//Importando componentes
import Header from './Header';
import Footer from './Footer';
import Main from './Main';



function App() {
  return (
    <>
      <Header className='header'/>
      <Main films={movielist}/>
      <Footer />
    </>
  );
}

export default App;
