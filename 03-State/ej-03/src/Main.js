import './Main.css';

function House(props) {
	return (
		<div className='card'>
			<p>Price: {props.price}</p>
			<p>Rooms: {props.rooms}</p>
			<p>Bathrooms: {props.bathrooms}</p>
			<p>State: {props.state}</p>
			<p>Floor: {props.floor}</p>
			<p>Extras: {props.extras}</p>
		</div>
	)
}

function Main(props) {
	return (
		<main className='catalogue'>
			{props.data.map((house, i) => {

				return (
					<House
						key={i}
						price={house.price}
						rooms={house.rooms}
						bathrooms={house.bathrooms}
						state={house.state}
						floor={house.floor}
						extras={house.extras}
					/>
				)
			})}
		</main>
	)
}

export default Main;