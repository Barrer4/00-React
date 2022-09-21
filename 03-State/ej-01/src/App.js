
import './App.css';
import persona from './person';



function App() {
	return (
		<>
			<div className='card'>
				<h1>{persona.nombre}</h1>
				<h4>Edad:</h4>
				<p>{persona.edad}</p>
				<h4>Fecha de nacimiento:</h4>
				<p>{persona.nacimiento}</p>
				<h4>Dirección:</h4>
				<p>{persona.direccion.calle}, {persona.direccion.numero}</p>
				<p>{persona.direccion.cp}, {persona.direccion.ciudad}</p>
				<p></p>
				<h4>Grupo sanguíneo:</h4>
				<p>{persona.grupoSanguineo.grupo} {persona.grupoSanguineo.rh}</p>
				
			</div>
		</>
	)
};


export default App;
