let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

let type = typeof (num);
console.log("Type: " + type);
console.log("Length: " + String(num).length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

let deci = ' ';
deci = num.toFixed(2);
console.log("Decimal " + deci);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

if (String(num).includes('.')){
    console.log("Length with deci: " + String(num).length-1);
    } else {
    console.log("Length in Integer : " + String(num).length);
    } 

