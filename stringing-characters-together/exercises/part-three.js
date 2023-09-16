
//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

let firstLetter = language.slice(0,1);
let secondLetter = language.slice(4,5);
console.log ("Using Slice Method : " + firstLetter + secondLetter);

//2. Without using slice(), use method chaining to accomplish the same thing.
 
let firstIni = language[0];
let secondIni = language[4];
console.log("Using Method Chaning : " + firstIni + secondIni);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

let firstAlpha = language[0];
let secondAlpha = language[4];
let inAlpha = ( firstAlpha + secondAlpha );
console.log( "Using Bracket notation & Template Literal: " + `The abbreviation for '${language}' is '${inAlpha}'.` );


//4. Just for fun, try chaining 3 or more methods together, and then print the result.
let ans = "  The abbreviation for 'JavaScript' is 'JS'.  "
let trimmed = ans.trim().toLowerCase().replace('t','T').replace('j','J').replace('s','S').replace('js','JS');
console.log("Using More Than 3 Methods : " + trimmed);

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let changeCase = notTitleCase.replace('t','T') .replace('c','C');
console.log("Using Replace Method:" + changeCase);



