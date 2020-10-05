import React, { useEffect, useState } from 'react'

function Greeting() {
  const [hours, setDate] = useState(new Date())
  //. var hr = hours.getHours()%12
  // Use hours.getHours()%24 to get time instead of hours.getHours()%12. This gets the exact Pc time if correct in a 24hour format. Works best
  var hr = hours.getHours() % 24
  var mn = hours.getMinutes()
  var tm = hours.getSeconds()

  var period
  var timeOfDay
  if (hr < 12) {
    timeOfDay = "Good morning"
    period = "AM"
  }
  else if (hr >= 12 && hr <= 16) {
    timeOfDay = "Good afternoon"
    period = "PM"
  }
  else if (hr > 16 && hr <= 18) {
    timeOfDay = "Good evening"
    period = "PM"
  }
  else {
    timeOfDay = "Good Night"
    period = "PM"
  }

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000)
/// added this line for my cleanup. Tis prevents memeory leakage
    return () => {
      hours = new Date()
      setDate(hours)
    }
  }, []);

  return (
    <div className="time-font2">
      <h6><span>{timeOfDay}</span> <br />
        <span>{hours.toDateString()}{" || "}{hr}:{mn}:{tm} {period}</span>
      </h6>
    </div>
  )
}
export default Greeting





// const Greeting=()=>{
//         var date = new Date();
//         var hours = date.getHours();
//         var myDate = date.toDateString()
//         var timeDisplay = date.toLocaleTimeString() 
//         // let hours = 1
//         let timeOfDay 
//         if(hours<12){
//           timeOfDay ="Good morning" 
//         }
//         else if(hours>=12 && hours<16){
//           timeOfDay ="Good afternoon"  
//         }
//         else if(hours>=16 && hours<20){
//           timeOfDay ="Good evening"  
//         }
//         else{
//           timeOfDay ="Good Night" 
//         }
//         setInterval(() => {
//           timeDisplay = date.toLocaleTimeString();
//           hours = date.getHours();
//         },1000); 
//     return(<div>
//           <h6 style={{marginRight:10}}>{timeOfDay} <br/> {myDate} {" "} {timeDisplay}</h6>
//         </div>)

//   }





// export default Greeting