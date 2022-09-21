function Pkmon(props) {
    return (
        props.pkmon.map((pkmn, i) => {
            return (
               
                
                    <ul>
                        <li key={i}>{pkmn}</li>
                    </ul>
            
            )
        }))
};

export default Pkmon;