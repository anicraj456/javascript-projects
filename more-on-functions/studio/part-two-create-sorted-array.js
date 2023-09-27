function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...

//function to Sort each array in ascending order.

function ascendingOrder(arr){
  let ascenArray=[];
  while(arr.length>0){
      let mini = findMinValue(arr);
      ascenArray.push(mini);
      arr.splice(arr.indexOf(mini), 1);
  }
  return ascenArray;
}
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log("Ascending order of Sample Array1: " + ascendingOrder(nums1));
console.log("Ascending order of Sample Array2: " + ascendingOrder(nums2));
console.log("Ascending order of Sample Array3: " + ascendingOrder(nums3));
//console.log(nums1);//check if its empty array

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

function recursionSort(arr,arrSorted=[]){
if(arr.length===0){
  return arrSorted;
}
let mini = findMinValue(arr);
arrSorted.push(mini);
arr.splice(arr.indexOf(mini), 1);
return recursionSort(arr,arrSorted);
}

//Sample arrays for testing:

let nums11 = [5, 10, 2, 42];
let nums21 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums31 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];



console.log("Recursion sorted array: " + recursionSort(nums11));
console.log("Recursion sorted array: " + recursionSort(nums21));
console.log("Recursion sorted array: " + recursionSort(nums31));