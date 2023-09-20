let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

console.log(reverseCommas(protoArray1));
console.log(semiDash(protoArray2));
console.log(reverseSpaces(protoArray3));
console.log(commaSpace(protoArray4));
//2) 
function reverseCommas(protoArrays) {
	//TODO: 1. create and instantiate your variables.
	let check;
	let output;
	let checkedArray;
	//TODO: 2. write the code required for this step
      if(protoArrays.includes(",")){
		check = true;
	  }else{
		check =false;
	  }
     if (check){
		checkedArray = protoArrays.split(",").reverse();
		output = checkedArray.join(",");
	 }


	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
    }

//3)
   function semiDash(protoArrays) {
	let check;
	let output;
	let checkedArray;
//TODO: write the code required for this step
   if(protoArrays.includes(";")){
	check = true;
  }else{
	check =false;
  }
  if (check){
	checkedArray=protoArrays.split(";").sort();
	output = checkedArray.join("-");
 }
  
	return output;
}

//4)
function reverseSpaces(protoArrays) {
	let check;
	let output;
	let checkedArray;
  //TODO: write the code required for this step
  if(protoArrays.includes(" ")){
	check = true;
  }else{
	check =false;
  }
  if (check){
	checkedArray=protoArrays.split(" ").sort().reverse();
	output = checkedArray.join(" ");

 }
	return output;
}

//5)
function commaSpace(protoArrays) {
	let check;
	let output;
	let checkedArray;
	//TODO: write the code required for this step
	if(protoArrays.includes(", ")){
		check = true;
	  }else{
		check =false;
	  }
	if (check){
		checkedArray=protoArrays.split(", ").reverse();
		output = checkedArray.join(",");

	}
	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace,
}
