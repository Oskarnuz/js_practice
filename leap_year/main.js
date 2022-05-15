//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 

 const leapYear = () => {
    let year = prompt('Enter a year');
    let leap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    alert(leap);
}

leapYear();