import './App.css';
import properties from './houses.js'
import Main from './Main'

function App() {
  return (
    <Main data={properties} />
  );
}

export default App;
