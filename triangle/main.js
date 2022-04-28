/* Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. */

//Declare the variables for to save the lengths sides values
const side_a = 5; 
const side_b = 6; 
const side_c = 7; 
//Declare the variable for to calculate the triangle perimeter, after this I need this value for the Heron´s formule.
const perimeter = (side_a + side_b + side_c)/2;
//Declare the variable to save the calculation of the square root of the perimeter multiplied by the product of the subtractions of the perimeter for each of the sides

const area =  Math.sqrt(perimeter*((perimeter-side_a)*(perimeter-side_b)*(perimeter-side_c)));
console.log(area);
