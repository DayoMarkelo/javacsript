//oude stijl loops
const colors = ["yellow","blue","red","orange"];
let colorLog = 0;
while (colorLog < colors.length) {
  console.log(colors[colorLog]);
  colorLog++;
}

for (let colorLog = 0; colorLog < colors.length; colorLog++) {
  console.log(colors[colorLog]);
}

// nieuwe stijl array methods
colors.forEach((color) => console.log(color));

const theColors = {
  colorWall: "blue",
  colorFruit: "orange",
  colorCar: "red",
  colorHair: "white",
  colorGras: "green",
};

for (i in theColors) {
  console.log(theColors[i]);
}

// vragen
// 1. for loop 3, while loop 5
// 2. ForEach 1, met de colors en log erbij meer
// 3. je hoeft de loop niet stop te zetten zoals bij een infinite loop
// array methos is makkelijker leesbaar doordat het op 1 lijn zit maar wel even wennen
