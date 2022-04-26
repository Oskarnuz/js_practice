/* Write a JavaScript program to print the contents of the current window.
*/
/*Declare the variable for the function print and the function declare the variable for to call the Id print, then create 
the event for the button and finally to create the function print.
*/
const printCurrentWindow = () => {   
   const button =  document.querySelector('#print');

   button.addEventListener('click', function() {
      window.print();
   });
}
// To call the function to print the window active
printCurrentWindow();
