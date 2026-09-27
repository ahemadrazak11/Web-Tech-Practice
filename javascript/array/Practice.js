/*
Write a JavaScript program to get the first n elements of an array. [n can be any positive number].

Example:
Array: [7, 9, 0, -2]
n = 3
Output: [7, 9, 0]
*/

let arr = [7, 9,0,-2];

let n = prompt("Enter the number");

let firtNthElement = arr.slice(0, n);

console.log("First Nth Elements = ", firtNthElement);


let lastNthElement = arr.slice(length-n);

console.log("Last Nth Elements = ", lastNthElement);