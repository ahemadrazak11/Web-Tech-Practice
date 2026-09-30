
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
