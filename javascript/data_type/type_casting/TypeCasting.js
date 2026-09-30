/*
Data Type Casting
1. implicit casting
2. explicit casting

*/

//1. imlicit casting (type coercion)

let f = 25;
let l = "5";

console.log(f+l, typeof f+l); // 225 : string concatination
console.log(f-l, typeof f+l); // 20 : number
console.log(f*l, typeof f+l); // 125 : number
console.log(f/l, typeof f+l); // 5 : number





// 2. explicit casting
/*
2.1 any data type to number
    2.1.1 Number(anyData) : number Number Constructor
    2.1.2 parseInt(string) : number
    2.1.3 parseFloat(string) : number
*/ 


let str = "9597170631";

// 2.1.1 Number(anyData) : number Number Constructor
console.log(Number(str), typeof Number(str)); // 9597170631 : number
console.log(Number(true)); // 1 : number
console.log(Number(false)); // 0 : number
console.log(Number("TA1312")); //NaN : number
console.log(Number("1312TA")); //NaN : number



//2.1.2 parseInt(string) : number

console.log(parseInt("TA1312"));
console.log(parseInt("1312TA"));
console.log(parseInt(true));
console.log(parseInt(false));



//2.1.3 parseFloat(string) : number

console.log(parseFloat("CGPA9.5"));
console.log(parseFloat("9.5CGPA"));
console.log(parseFloat(true));
console.log(parseFloat(false));







/*
2.2 any data type to string
    2.2.1 String(anyData) : string Strign Constructor.
    2.2.2 object.toString() : string
*/

//  2.2.1 String(anyData) : string Strign Constructor.

console.log(String(1234));
console.log(String(true));
console.log(String(false));

//  2.2.2 object.toString() : string

let isActive = true;
let no = 12323;
console.log(isActive.toString());
console.log(no.toString());






/*
2.3 any data type to boolean
    2.3.1 Boolean(anyData): boolean
 */

    let r = 0;

    console.log(Boolean(r));
    console.log(Boolean(1));
    console.log(Boolean(0));
    console.log(Boolean([]));
    console.log(Boolean({}));
    console.log(Boolean(-0));
    console.log(Boolean(123));
    console.log(Boolean(""));
    console.log(Boolean(" "));
    