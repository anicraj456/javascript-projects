// Code your crewMass function here:
function crewMass(arr){
  let mass = 0;
  for(i=0;i<arr.lemgth;i++){
   mass= mass + arr[i].mass;
  }
  return Math.round(mass*10)/10;
}

//function to get total mass:

function getTotMass(arr){
  let rocketMass = 75000;
  let totalMass = crewMass(arr) + rocketMass + safetyMargin(arr);
  return totalMass;
}

// Code your fuelRequired function here:

function fuelRequired(arr){
  return Math.ceil(getTotMass(arr) * 9.5);
}

function safetyMargin(arr){
  let otherSpecies = 100 * arr.length;
  //console.log(otherSpecies);
  if(arr[i].species==="dog" || arr[i].species==="cat"){
    otherSpecies = otherSpecies + 100;
    //console.log(otherSpecies);
  }
  return otherSpecies;
}


// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateB,candidateD,candidateF];
  console.log(`The mission has a launch mass of ${getTotMass(crew)}kg and requires ${fuelRequired(crew)}kg of fuel.`);