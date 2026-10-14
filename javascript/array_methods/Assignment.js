// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.

console.log("Q1. Square and sum the array elements using the arrow function and then find the average of the array.");

let arr = [1,2,3,4,5];

console.log(`Array Elements => [ ${arr} ]`);

let arrSquare = arr.map((el) => {
    return el * el;
});

console.log(`The Square of array => [ ${arrSquare} ]`);

let arrSum = arr.reduce((res, el) =>{
    return res + el;
});


console.log(`Array Sum => ${arrSum}`);

console.log(`The Average of array => ${arrSum / arr.length}`);

// ===================================

console.log(`Q2.Create a new array using the map function whose each element is equal to the original element plus 5.`);


let arrNew = arr.map((el) => (el + 5));

console.log("The New Array => " + arrNew);

//====================================
console.log(`Q3. Create a new array whose elements are in uppercase of words present in the original array.`);

let fruits = ["apple", "mango", "banana", "coconut", "pomegranat"];

let upperCaseFruits = fruits.map((el) => el.toUpperCase());

console.log(`The Upper Case Word Array => [ ${upperCaseFruits} ]`);

//===================================

console.log(`Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled.`);

let doubleAndReturnArgs = (ar, ...numArg) => ([...ar, ...numArg.map((el) => el * 2)]);


console.log(doubleAndReturnArgs(arr, 10,20,30,40));


//=====================================
console.log(`Q5. Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object.`);

let student1 = {
    name: "Raza",
    age: 23,
}

let student2 = {
    name1: "Khan",
    age1: "20",
}

let mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

console.log(mergeObjects(student1, student2));

