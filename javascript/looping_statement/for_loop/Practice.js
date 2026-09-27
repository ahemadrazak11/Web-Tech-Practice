
/*
Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
Result should be arr = [1, 3, 4, 5, 6, 3]
*/

console.log("Write a JS program to delete all occurrences of element 'num' in a given array.");

let arr = [1,2,3,4,5,6,2,3];

let num = 2;


for(let i = 0; i < arr.length; i++){

    if(arr[i] == 2){
        arr.splice(i, 1);
    }
}

console.log(arr);


/*

Qs2. Write a JS program to find the no of digits in a number.
Example : if number = 287152, count = 6

*/


console.log("Qs2. Write a JS program to find the no of digits in a number.");

let number = 287152;

let count = 0;

console.log("Number => ", number);

while(number > 0){

    number = Math.floor(number / 10);
    count++;

}

console.log("The Total Count => ", count);


/*

Qs3. Write a JS program to find the sum of digits in a number.
Example : if number = 287152, sum = 25

*/

number = 287152;
console.log("Number => ", number);
let sum = 0;

while(number > 0){
    
    temp = number % 10;
    
    sum += temp;
    
    number = Math.floor(number / 10);
    
}

console.log("The Sum Of Total Digits => ", sum);


/*

Qs4. Print the factorial of a number n.
[Factorial of a number n is the product of all positive integers less than or equal to a
given positive integer and denoted by that integer. ]
Example :
7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
5! (factorial of 5) = 1x2x3x4x5 = 120
3! (factorial of 3) = 1x2x3 = 6
0! Is always 1

*/

number = 7;
console.log("Number => ", number);

let fact = 1;

while(number > 0){

    fact = fact * number;

    number--;
    
}

console.log("The Factorial Of A Number => ", fact);


/*
Qs5. Find the largest number in an array with only positive numbers.
*/

