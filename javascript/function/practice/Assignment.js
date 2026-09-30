
/*
Qs1. Write a JavaScript function that returns array elements larger than a number.
*/

console.log("Qs1. Write a JavaScript function that returns array elements larger than a number.");

function getArray(arr, num){

   // let arr = [10,20,30,40,50,60,70,80,90,100];
    let arr2 = [];
    let count = 0;
    for(let i = 0; i<arr.length; i++){

        if(arr[i]> num){
            arr2[count++] = arr[i];
        }
    }

    return arr2;
}


let arr = [10,20,30,40,50,60,70,80,90,100];
console.log(getArray(arr, 20));


/*

Qs2. Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh”
ans = “abcdefgh”

*/

console.log("Qs2. Write a JavaScript function to extract unique characters from a string.");
function getUnique(str){
   let str2 = "";
   
   for(let s of str){
        if(str2.indexOf(s) == -1){
            str2 = str2 + s;
        }
        
   }

   return str2;
}


let str = "abcdabcdefgggh";

console.log(getUnique(str));


/*

Qs3. Write a JavaScript function that accepts a list of country names as input and
returns the longest country name as output.
Example : country = ["Australia", "Germany", "United States of America"]
output : "United States of America"

*/


console.log("Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.");


function getLongestCountry(arr){

    let lng = arr[0];

    for(let c of arr){
       if(c.length>lng.length){
        lng = c;
       }
    }

    return lng;
}


let country = ["Australia", "Germany", "United States of America"];

console.log(getLongestCountry(country));
console.log(getLongestCountry(["INDIA", "CHINA", "AFRICA", "INDIA IS GREAT"]));


/*
Qs4. Write a JavaScript function to count the number of vowels in a String argument.
Qs5. Write a JavaScript function to generate a random number within a range (start,end). 

*/

console.log("Qs4. Write a JavaScript function to count the number of vowels in a String argument.");

function countVowels(str){

    let count = 0;
    for(let s of str){

        if(s == "a" || s == "A" || s == "e" || s == "E" || s == "i" || s == "I" || s == "o" || s == "O" || s == "u" || s == "U"){
            count++;
        }
    }

    return count;
}

console.log("Total Vowels In String ==> ", countVowels("Ahemad Raza Khan"));
console.log("Total Vowels In String ==> ", countVowels("aeiou"));











console.log("Qs5. Write a JavaScript function to generate a random number within a range (start,end).");

// function with default parameters.
function getRandom(start=1, end=6){

    let d = end - start;
    let random = Math.floor(Math.random() * d) + start;

    return random;
}

// if we not pass any argument then it will consider default parameters as argument.
// default value => getRandom(1,6);
console.log("Random Number Is ==> ", getRandom()); 

console.log("Random Number Is ==> ", getRandom(10,20)); 
console.log("Random Number Is ==> ", getRandom(1,2)); 