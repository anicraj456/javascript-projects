let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function () {
      return Math.floor(Math.random()*11)
   }

};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function () {
      return Math.floor(Math.random()*11)
   }

};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function () 
   {return Math.floor(Math.random()*11)
   }

};


let dogBreed = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function () {
      return Math.floor(Math.random()*11)
   }

};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function () {
      return Math.floor(Math.random()*11)
   }

};

// After you have created the other object literals, add the astronautID property to each one.

superChimpOne["astronautId"] = 7;
salamander["astronautId"] = 10;
superChimpTwo["astronautId"] = 9;
dogBreed["astronautId"] = 5;
waterBear["astronautId"] = 1;

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, dogBreed, waterBear];

// Print out the relevant information about each animal.




function crewReports(crew){
   for (item in crew) {
      return(` '${name}' is a '${species}'. They are '${age}' years old and '${mass}' kilograms. Their ID is '${astronautId}'.`);
   }  

};

// Start an animal race!