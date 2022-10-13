
import biblioteca from './biblioteca.js'

//Importando componentes
import Header from './Header'
import Main from './Main'


function App() {
  return (
    <>
      <Header users={biblioteca.usuario}/>
      <Main books={biblioteca.libros} />
      
    </>
  );
}

export default App;