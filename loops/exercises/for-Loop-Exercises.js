/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

    //a. Print the numbers 0 - 20, one number per line.

    for (let i=0;i<21;i++){
      //console.log("Num Per Line: " + i);
      }

    //b. Print only the ODD values from 3 - 29, one number per line.

    for(let j=2;j<30;j++){
        j=j+1;
        //console.log("Odd Value: " + j);
    }
    
    //c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    let a=-14;
    for (let k=12;k<=20;k-2){
      console.log("the value of K" + k);
    }
/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
 
  //Initializing variable
/*
 let str = "LaunchCode";
 let arr = [1, 5, 'LC101', 'blue', 42];
 let reverse = "";

 // a. Print each element of the array to a new line.

 for (let j= 0;j<arr.length;j++){
   console.log("Element of Array : " + arr[j]);
 }
*/
 // b. Print each character of the string - in reverse order - to a new line. */ 

 /*for (let i = 0; i < str.length; i++) {
  reverse = str[i] + reverse;
}
console.log("Reversed String: " + reverse); */

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  /*let arr1= [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let even=[];
  let odd=[];
  

  for ( let a = 0 ; a <= arr1.length ; a ++ ) {
    if (arr1[a] === ( a % 2 == 0 )){
       console.log(even);
     } 
    }
*/