// Code your selectRandomEntry function here:

function selectRandomEntry(arr){
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
let idNumbers = [291, 414, 503, 599, 796, 890];
/*for(let i =0;i<6;i++){
  console.log(selectRandomEntry(idNumbers));
}*/

let randomId = [];
while(randomId.length < 3){
  let newId = selectRandomEntry(idNumbers);
  if(!randomId.includes(newId)){
    randomId.push(newId);
  }
}
    console.log("Random ID : " + randomId);


// Code your buildCrewArray function here:

function buildCrewArray(newIdNumbers,candid){
  //console.log("New Id numbers "+newIdNumbers);
  //console.log("Candid "+candid);
  let newCrew=[];
  for(let i=0;i<candid.length;i++){
    if(newIdNumbers.includes(candid[i].astronautID)){
      newCrew.push(candid[i]); 
    }
  }
  for(let i =0;i<newCrew;i++){
  console.log(newCrew);
}
  //console.log(newCrew);
  return newCrew;
}

//let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

let crew = buildCrewArray(randomId,animals);
//console.log(crew);
// Code your template literal and console.log statements:
let statements = `${crew[0].name},${crew[1].name}, and ${crew[2].name} are going to space!`;
console.log(statements);

