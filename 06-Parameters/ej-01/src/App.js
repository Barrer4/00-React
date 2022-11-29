
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Saludo from './components/Saludo';



function App() {


  return (
    <BrowserRouter className="App">
      <Routes>
        <Route index
          element={
            <div>
              <input
                type='text'
                placeholder='Introduzca su nombre'
                value={input}
                onChange={event => setInput(event.target.value)}
              />

              <Link to={'/saludo/' + input}><button onClick={() => Saludo(input)}
              >Saludar</button></Link>
            </div>}
        />

        <Route
          path='/saludo/:name'
          element={
            <Saludo name={setInput} />}
        />

        <Route
          path='*'
          element={<h2>404: Page not found.</h2>}
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
