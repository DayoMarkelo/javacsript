
//Even Odd Reporter, % is de remainder deze geeft wat er overblijft nadat je twee cijfers door elkaar hebt gedeeld. bijv 15% van 7 is 1)
// in dit geval wordt het getal dus gedeeld door 2 als het overblijfsel 0 is is het een even getal
for (let i = 0; i <= 20; i++) {
   if (i %2 === 0){
   console.log("this is even " + i);}
else {
console.log ("this is uneven " + i);}
}

//multiplication table
const  multiplication = 9;
for (let n1 = 0; n1 <= 10; n1++) {
   let result = multiplication * n1;
   console.log(multiplication + " * " + n1 + " = " + result);
 }

 //the grade assigner
 function assignGrade(score) {
   if (score > 90) {
     return "A";
   } else if (score > 80) {
     return "B";
   } else if (score > 70) {
     return "C";
   } else if (score > 65) {
     return "D";
   } else {
     return "E";
   }
 }
for (let points = 0; points <= 100; points++)
 console.log ("For scoring " + points + " you get a " + assignGrade (points));

 
