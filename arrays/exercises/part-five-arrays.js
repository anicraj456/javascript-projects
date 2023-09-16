let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];
console.log("Orinigal str: " + str);
console.log("Original Arr: " + arr);
//1) Use the split method on the string to identify the purpose of the parameter inside the ().

str = str.split(' ');  
console.log("split the string at each space: " + str); 

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

arr = arr.join("+");
console.log("Join Array With + : " + arr); 


//3) Do split or join change the original string/array?

console.log("Str Changed After Split Method : " + str); 
console.log("Arr Changed After Join Method: " + arr);




//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
cargoHold = cargoHold.split(',');
console.log("String to Array: " + cargoHold);
cargoHold.sort();
console.log("Alphabetical Order: " + cargoHold);
let newArray = cargoHold.toString();
console.log("New Array: " + newArray);


