
/*
//hey kiddo
const agecheck = function (theAge){
if (theAge >= 18) {
return "true" ;}
return  "false"
};
//const age = agecheck (16);
//console.log (age)

const greeting = function (theAge){
if (theAge == "true"){
return "Hello there " +theAge;}
return "hey kiddo " + theAge;}

//const age = greeting ("true")
//console.log (age)

const adultGreetingCheck = function (theAge){
const adultCheck = agecheck (theAge);
const adultGreeting = greeting (adultCheck);
return adultGreeting;};

console.log (adultGreetingCheck (12))
console.log (adultGreetingCheck (21))
console.log (adultGreetingCheck (5))
console.log (adultGreetingCheck (19))
*/


/*
//VAT Calculations 1
const vatAmount = function (n1,n2){
return (n1*n2);}

const number = vatAmount (200,0.21)
//console.log (number)

//const amountVatPrice= vatAmount (200,0.21)
//console.log (amountVatPrice)

const purchase = function (n1){
return n1 + number;}

const outcome = purchase (200)
console.log (outcome)
*/

//VAT Calculations 2
const vatAmount = function (n1,n2){
   return (n1*n2);}
   const number = vatAmount (200,1.21)
  
   const purchase = function (n1){
      const sum = (number - n1)
   return [sum, n1] ;}
   

   const outcome = purchase (200)
   console.log (outcome)



