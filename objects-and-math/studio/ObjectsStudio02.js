// Code your orbitCircumference function here:
function orbitCircumference(altitude){
  let radiusOfEarth = 6378;
  let orbitRadius = radiusOfEarth + altitude;
  circumOfOrbit = Math.round(2*Math.PI*orbitRadius);
  console.log(circumOfOrbit);
  return circumOfOrbit; 
}
//orbitCircumference(2000);

// Code your missionDuration function here:
function missionDuration(numOfOrbit,orbitRadius=2000,orbitSpeed=28000){
  //time=distance*speed
  //distance=speed*time
  //speed=distance/time
let circum = orbitCircumference(orbitRadius);
let distance = numOfOrbit * circum;
let time = Math.round(distance/orbitSpeed*100)/100 ;
console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`)
return time;
};
//missionDuration(3)
// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}
let idNumbers = [291, 414, 503, 599, 796, 890];
/*for(let i =0;i<6;i++){
  console.log(selectRandomEntry(idNumbers));
}*/

// Code your oxygenExpended function here:
function oxygenExpended(candidate,orbitRadius,orbitSpeed){
  let spaceWalk = missionDuration(3,orbitRadius,orbitSpeed);
  console.log("spaceWalk: " +spaceWalk);
  let oxygen = candidate.o2Used(spaceWalk);
  console.log("oxygen used for spacewalk: " + oxygen);
  let oxygenUsed = oxygen*spaceWalk;
  let oxygenRounded = Math.round(oxygenUsed*1000)/1000;
  console.log("oxygen rounded : " + oxygenRounded);
  console.log(`${candidate.name} will perform the spacewalk, which will last ${spaceWalk} hours and require ${oxygenRounded}kg of oxygen.`);
};
//oxygenExpended(candidateA,2500,27000);
// Candidate data & crew array. 

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

  //oxygenExpended(candidateB,2500,27000);
 let crew = [candidateA,candidateC,candidateE];

function lowOxygen(arr){
  let candidate = arr[0];
  for(i=1;i<arr.length;i++){
    if(arr[i].o2Used(1) < candidate.o2Used(1)){
    candidate = arr[i];
    }
  }
  return candidate;
};

let selectedOxygen = lowOxygen(crew);

oxygenExpended(selectedOxygen,3000,24000);
 