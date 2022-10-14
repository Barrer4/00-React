
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Components:
import Header from './components/Header';
import Months from './components/Months';
import Days from './components/Days';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/months' element={<Months />}/>
      <Route path='/days' element={<Days />}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
