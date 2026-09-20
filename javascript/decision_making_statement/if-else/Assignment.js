//Q1. Create a number variable num with some value.
//Now, print “good” if the number is divisible by 10 and print “bad” if it is not.

// let num = 210;

// if(num % 10 == 0){
//     console.log("Number is Good");
// }
// else{
//     console.log("Number is Bad.");
// }


/*
Qs2. Take the user's name & age as input using prompts.
Then return back the following statement to the user as an alert (by substituting
their name & age) :
name is age years old.
[Use template Literals to print this sentence]

*/

// let userName = prompt("Enter your name");
// let userAge = prompt("Enter your age");

// alert(`${userName} is ${userAge} years Old`);

// console.log(`${userName} is ${userAge} years old`);



/*

Qs3. Write a switch statement to print the months in a quarter.
Months in Quarter 1 : January, February, March
Months in Quarter 2 : April, May, June
Months in Quarter 3 : July, August, September
Months in Quarter 4: October, November, December
[Use the number as the case value in switch]



*/


// let choice = prompt("Enter The Choice");

// switch(choice){
//     case "1":
//         console.log("January, February, March")
//     break;

//     case "2":
//         console.log("April, May, June");
//     break;

//     case "3":
//         console.log("October, November, December");
//     break;

//     default:
//         console.log("Invalid Choice");

// }


/*

Qs4. A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total
length greater than 5.
For a given string print if it is golden or not.

*/


// let str = prompt("Enter A String");

// if(str.length > 5 && (str[0] == 'A' || str[0] == 'a')){
//     console.log("The String is Golden")
// }
// else{
//     console.log("String is not Golden");
// }


/*

Qs5. Write a program to find the largest of 3 numbers. 

*/

// let a = 100;
// let b = 200;
// let c = 300;

// if(a>b && a>c){
//     console.log(a + " A is Greater");
// }
// else if(b>a && b>c){
//     console.log(b + " B is Greater");
// }
// else{
//     console.log(c + " C is Greater");
// }

/*

Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit.
Eg : 32 and 47852 have the same last digit i.e. 2
*/

let a = prompt("Enter First Number");
let b = prompt("Enter Second Number");

const lengthA = a.length;

const lengthB = b.length;

if(a[lengthA - 1] == b[lengthB - 1]){

    console.log(`A = ${a} \nB = ${b}`);
    
    console.log("The last digit of both number are same.");
}
else{
    console.log(`A = ${a} \n B = ${b}`);
    console.log("The last digit of the both number are not same");
}