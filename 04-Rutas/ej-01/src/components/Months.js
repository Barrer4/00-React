function Months(){
   let months=['january','february','march','april','may','june','july','august','september','october','november','december'];

   return(
      <div className='main'>
      <ul>
         {months.map((month)=><li>{month}</li>)}
      </ul>
      </div>
   )
}

export default Months;