// Write a JavaScript program to get the current date and show the date in the expected format.  

//Declare the variables for the today 

let today = new Date();
// Declare the variable for to save the date 
let dd = today.getDate();
/* Declare the variable for to save the month is necesary to add 1 because the function return is a number between 
0 and 11 when 0 is enero and 11 is december */
let mm = today.getMonth()+1; 
// Declare the variable for to save the year
let yyyy = today.getFullYear();
// Evaluate if the day number is less than 10 and agree before 0
if(dd<10) 
{
    dd=`0${dd}`;
} 
// Evaluate if the month number is less than 10 and agree before 0
if(mm<10) 
{
    mm=`0${mm}`;
} 
// Show in the console the date in different format
today = `${mm}-${dd}-${yyyy}`;
console.log(today);
today = `${mm}/${dd}/${yyyy}`;
console.log(today);
today = `${dd}-${mm}-${yyyy}`;
console.log(today);
today = `${dd}/${mm}/${yyyy}`;
console.log(today);
