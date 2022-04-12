// Declare the variables for request the day and add the array of the week
let today = new Date();
  let day = today.getDay();
  let week = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  // show in console the date
  console.log("Today is : " + week[day] + ".");
  // declare the variables for request the time
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let prepand = (hour >= 12)? " PM ":" AM ";
  //Evaluate if the parameter of the time is pm or am
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
  // show in console the time
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);
