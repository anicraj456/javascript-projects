let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//1) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.

cargoHold[5] = 'space tether';
console.log("Array After Replaced  An Item :" + cargoHold);

//2) Remove the last item from the array with pop. Print the element removed and the updated array.

console.log("Remove Last Item: " + cargoHold.pop());

console.log("Array After Pop: " + cargoHold);

//3) Remove the first item from the array with shift. Print the element removed and the updated array.

console.log("Removed First Item : " + cargoHold.shift());
console.log("Array After Shift : " + cargoHold);

//4) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.

console.log(cargoHold);
console.log("Added Item  Number After unshift : " + cargoHold.unshift(1138));
console.log("Array After Unshifted: " + cargoHold);


console.log("Added Item Number After Push: " + cargoHold.push('20 meter'));
console.log("Array After Pushed: " + cargoHold);
let len = cargoHold. length; 
//5) Use a template literal to print the final array and its length.

console.log(`The final Array is [ ${cargoHold} ] and Array length is ${len} .`);


