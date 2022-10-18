function Musicians(props) {
   return (
      <ul>
         {props.musicians.map((composer, i) => <li key={i}>{composer.nombre}</li>)}
      </ul>
   )
};


export default Musicians;
