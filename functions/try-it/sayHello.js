//function sayHello() {
//   console.log("Hello, World!");
//}
/*function plusTwo(num) {
   return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
   a = plusTwo(a);
}

console.log(a);

function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');

function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');

let num = 42;

function isEven (num) { 
    return num % 2 === 0; 
}

console.log(isEven(43)); 
*/
/*function printMessage() {
   console.log("The future is now!");
}

setTimeout(printMessage, 15000);

function reverse(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
   return reversedLettersArray.join('');
}*/

let f1 = function(str) {
   return str + str;
};

let f2 = f1;
console.log (f2("abcd"));


let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()
let halved = nums.map(function(n){
   return n/2;
});
console.log(halved);

let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(function(n){
   return n.slice(0,1);
});

console.log(firstInitials);

let fileLogger = function(msg) {

   // Put the message in a file
}

/*function logError(msg, logger) {
   let errorMsg = 'ERROR: ' + msg;
   logger(errorMsg);
}

logError('Something broke!', fileLogger);

function callMe(func) {
   func();
}

callMe("Al");*/

/*function removeI(arr) {
   if (baseCase == true){
   //return final array
   //end recursion
   arr.indexOf('i')===-1
   } else {
   //remove one 'i' entry from array
   //call removeI function again
   }
};*/


//more on function Exercises:

let num = ['Elocution', 21, 'Clean teeth', 100];
let triple = function(aNum) {
   if (typeof aNum === "number") {
      return aNum * 3;
   } else    if (typeof aNum === "string") {
      return “ARRR!”; 
   } else {
      return aNum;
   }
};
let nums = [3.14, 42, 4811];

let timesTwo = function (n) {
    return n*2;
};

let doubled = nums.map(timesTwo);

console.log(nums);
console.log(doubled);