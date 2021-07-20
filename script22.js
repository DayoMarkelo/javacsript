let teRadenNumber = null;
let naam;
let guessNumber;
const minimale = 0;
const maximale = 25;

while (naam === undefined || naam === null || naam.length === 0) {
  naam = prompt("Welkom, wat is je naam?");
}

alert("Hey, " + naam)

teRadenNumber = Math.floor(Math.random() * (maximale - minimale)) + minimale;
console.log("Pssst het nummer is: " + teRadenNumber);

while (guessNumber !== teRadenNumber) {
  guessNumber = (prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden..."));
  alert("Je gok is:" + guessNumber);
  if (guessNumber > teRadenNumber) {
    alert("Dat is niet correct, wil je het opnieuw proberen?");
  } else {
    alert("Gefeliciteerd je hebt gewonnen");
    alert(
      "Dag " + naam +"." + " Tot de volgende keer");
  }
}