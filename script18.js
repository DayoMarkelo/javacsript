
// function declaration
function squareNumber (number1, number2){
const multiply = (number1 * number1 + number2 * number2);
return multiply+multiply*multiply};

const square = squareNumber (2,1);
console.log (square)


//function expressions
const multiplyNumber = function (n1, n2){
const sum = (n1*n1 + n2*n2);
return sum+sum*sum;};

const multiplied =  multiplyNumber (2,1)
console.log (multiplied)

//Arrow functions
const multiply_these_numbers = (n1, n2) => {
   const added = (n1*n1 + n2*n2);
   return added+added*added;};

   const result = multiply_these_numbers (2,1)
   console.log (result)