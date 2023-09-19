const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let str1 = str.slice(0,3);
let str2 = str.slice(3);
//console.log(`${str2}${str1}`);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`${str2}${str1}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let userStr = input.question("Number of letters to relocate:");
userStr = Number(userStr);
let newStr = str.slice(0,userStr);
let newStr1 = str.slice(userStr);
let newStr2 =`${newStr1}${newStr}`;
console.log("User input : " + newStr2);
//console.log(`${newStr1}${newStr}`);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
newStr2 = "";
if(userStr>=str.length){
    userStr=str.slice(3);
    console.log("length too big");
    //userStr=str.length;
}else{

userStr = `${newStr1}${newStr}${newStr2}`;
console.log("validation: " + userStr);
}
 