
const makePizza = function() {
   console.log("Voeg de bloem en gist samen");
   console.log("Voeg hier water aan toe");
   console.log("Kneed het deeg");
};

const makeSushi = function() {
   console.log("Leg de rijst op het nori vel");
   console.log("smeer de saus op de rijst");
   console.log("leg de komkommerreepjes op de saus");
};

//deel 1
/*
makePizza ();
makePizza ();
makePizza ();
*/

//deel 2
/*
makeSushi();
makeSushi();
*/


// Meerdere keren callen zonder te kopieren
for (var i = 0; i < 3; i++) {
   makeSushi();
}

for (var i = 0; i < 2; i++) {
   makePizza();
}
