//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.

let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

let table =[];
table.push(element1, element2, element26);
console.log(table[0]);
console.log(table[1]);
console.log(table[2]);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

console.log("Result of One Index: " + table[2]);
console.log("Result of TWo Indices: " + table[0][1]);

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

console.log("The mass of element1: " + table[0][2]);
console.log("The name for element 2: " + table[1][0]);
console.log("The symbol for element26: " + table[2][1]);



//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

let threeDtable =[];
threeDtable.push(table);
console.log("Entry from 3D: " + threeDtable[0][0][1]);
console.log("Entry from 3D: " + threeDtable[0][1][0]);
console.log("Entry from 3D: " + threeDtable[0][2][2]);


