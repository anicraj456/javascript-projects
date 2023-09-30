let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautId: 7,

   move: function () {
      return Math.floor(Math.random()*11)
   }

};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautId: 10,

   move: function () {
      return Math.floor(Math.random()*11)
   }

};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautId: 4,

   move: function () 
   {return Math.floor(Math.random()*11)
   }

};


let dogBreed = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautId: 8,

   move: function () {
      return Math.floor(Math.random()*11)
   }
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautId: 3,
   move: function () {
      return Math.floor(Math.random()*11)
   }
};


// After you have created the other object literals, add the astronautID property to each one.


// Create an array to hold the animal objects.

let crew = [superChimpOne, salamander, superChimpTwo, dogBreed, waterBear];
//console.log(crew);

crewReports(waterBear); //passing  objects ..change parameter for diffirent objects

// Print out the relevant information about each animal.

function crewReports(waterBear){   //change parameter for diffirent objects
   //console.log("Informtion about one specific animal:\n")
   console.log(`'${waterBear.name}' is a '${waterBear.species}'. They are '${waterBear.age}' years old and '${waterBear.mass}' kilograms. Their ID is '${waterBear.astronautId}'.\n`); 

};

// Start an animal race!

let forFitness=[superChimpOne, salamander, superChimpTwo, dogBreed, waterBear];

let results = fitnessTest(forFitness); //printing result in new line
console.log("Result for fitness test: ");

for (let i=0;i<results.length;i++){
   console.log(results[i]);
}

function fitnessTest(forFitness){
   let results = [], numOfSteps, turns;
   for (let i = 0; i < forFitness.length; i++){
       numOfSteps = 0;
       turns = 0;
       while(numOfSteps < 20){
       numOfSteps = numOfSteps + forFitness[i].move();
       turns++;
       }
       results.push(`${forFitness[i].name} took ${turns} turns to take 20 steps. \n`);
   }
   return results;
   
  };
