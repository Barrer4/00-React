function Days() {
   let days = {
      first: 'monday',
      second: 'tuesday',
      third: 'wednesday',
      fourth: 'thursday',
      fifth: 'friday',
      sixth: 'saturday',
      seventh: 'sunday'
   }

   let arrayDays = [];
   for (const day in days) {
      arrayDays.push(days[day])
   }

   return(
      <div className='main'>
      <ul>
         {arrayDays.map((day)=><li>{day}</li>)}
      </ul>
      </div>
   )
};

export default Days;

