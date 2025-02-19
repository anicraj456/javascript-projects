//Part Two Section One

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.

console.log("Current State:" + dna);

//1) Use the .trim() method to remove the leading and trailing whitespace, then print the result.

console.log("Using Trim Method: " + dna.trim()); /* Your code here. */

//2) Change all of the letters in the dna string to UPPERCASE, then print the result.

console.log("Using Uppercase Method: " + dna.toUpperCase());

//3) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.

dna = dna.toUpperCase();
console.log("New DNA: " + dna);

//Part Two Section Two

let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//1) Replace the gene "GCT" with "AGG", and then print the altered strand.
 
dnaTwo = dnaTwo.replace("GCT", "AGG");
console.log("Using Replace Method: " + dnaTwo);

//2) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".

let dnaTwoIndex = dnaTwo.indexOf("CAT");
console.log("CAT gene at DnaTwo index :" + dnaTwoIndex);

let dnaTwoLength = dnaTwo.length;

if (dnaTwoIndex < dnaTwoLength){
    console.log("CAT gene found");
} else{
    console.log("CAT gene not found");
}

//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.

console.log("Sliced : " + dna.slice(17,20));

//4) Use a template literal to print, "The DNA strand is ___ characters long."

let dnaLength = dnaTwo.length;
console.log("Using Template Literal :" + `The DNA strand is ${dnaLength} characters long.`);

//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
 
console.log("Using Methods & Template Literal: " + `${dna.slice(5,8).toLowerCase()}o ${dna.slice(41,44).toLowerCase()}`); 
