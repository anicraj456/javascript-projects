let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

console.log("test");

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
  foodCabinet = food.split(",").sort();
  equipCabinet = equipment.split(",").sort();
  petCabinet = pets.split(",").sort();
  sleepCabinet = sleepAids.split(",").sort();
  console.log(foodCabinet);
  console.log(equipCabinet);
  console.log(petCabinet);
  console.log(sleepCabinet);


//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold =[];
cargoHold = [foodCabinet,equipCabinet,petCabinet,sleepCabinet];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let userInput = input.question("please select a cabinet (0 to 3): ");
userInput=Number(userInput);
//console.log("User selected cabinet: " + userInput);

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if(userInput < cargoHold){
    console.log(' selected cabinet is ${cargoHold[userInput]} ');
}else{
    console.log("ERROR!..")
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

const input = require('readline-sync');
let userCab = input.question("please select a cabinet (0 to 3): ");
userCab=Number(userCab);
console.log(userCab);
let userItem = input.question("please select an item: ");
userItem =string(userItem);
//userCab.includes(userItem);
if(userCab.includes(userItem)){
    console.log(`selected cabinet item ${userItem} is avaiable in ${userCab}`);
}else{
    console.log(`selected cabinet item ${userItem} is Not avaiable in ${userCab}`);
}
