
import './App.css';
import videoclub from './data/videoclub.js';

//Importando componentes
import Header from './Header';
import Footer from './Footer';
import Main from './Main';



function App() {
  return (
    <>
      <Header className='header'/>
      <Main peliculas={videoclub}/>
      <Footer />
    </>
  );
}

export default App;
