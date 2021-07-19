 /*
 //Is a number big
 const biggerThan = function (number){
   if (number > 100) {
   return "true";}
   return "false"
};

const result = biggerThan (50);
console.log (result)
*/

//Bouncer at a club
const clubEntrance = function (agenumber, occupancy, maximum) {
   if (occupancy > 80 || maximum >80) {
   		return "it's too busy now, come back later"
   } 
   else if (agenumber <18) {
    	return "this is a club for adults"}
    else (agenumber >= 18 && occupancy <80 && maximum <81)
    	return ( "come in");}

const result = clubEntrance (18,70,80);
console.log (result)


//calculating the average
const averageNumber = function (number1,number2,number3,number4,number5){
const average = (number1+number2+number3+number4+number5)
return average /5};

const numberAverage = averageNumber (60,20,44,22,5);
console.log (numberAverage)