//Write a JavaScript program to calculate days left until next Christmas.

const dayNextChristmas = () => {

 const today = new Date();
 const christmas = new Date(today.getFullYear(), 11, 25);
 const  days = Math.floor((christmas - today) / (1000 * 60 * 60 * 24));
 console.log(`Days left until next Christmas: ${days}`);

}

dayNextChristmas();
