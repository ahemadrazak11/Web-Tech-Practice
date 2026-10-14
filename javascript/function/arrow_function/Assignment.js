// Qs1. Write an arrow function named arrayAverage that accepts an array of numbers
// and returns the average of those numbers.

const arrayAverage = (a) => {
    let avg = 0;
        for(let i = 0; i<a.length; i++){
            avg += a[i];
        }
        
        return avg = avg / a.length;        
    };

    let arr = [10,20,30,40];

    console.log(`The Average [ ${arr} ] is => ${arrayAverage(arr)}`);


/*
Write an arrow function named isEven() that takes a single number as argument
and returns if it is even or not.
*/

const isEven = (a) => a % 2 == 0;

console.log(`2 is Even ${isEven(2)}`);
console.log(`5 is Even ${isEven(5)}`);
console.log(`10 is Even ${isEven(10)}`);
console.log(`31 is Even ${isEven(31)}`);



/*

Qs3. What is the output of the following code :

OutPut:
Hello, World!
After 1 second.

*/

const object = {
message: 'Hello, World!',
logMessage() {
console.log(this.message);
}
};

// setTimeout(object.logMessage, 1000);
/*
in this function the setTimeout function accept the object.logMessage function address/reference only
not call at this time and then wait for 1 second and call it by executer environment means window
object or node evnironment and then this function try to search in that object but in that object
the function in undefine that's why we are seeing undefine. 
*/


// object.logMessage();
/*
In this function we are directly call the function by it's object and that object is consider
as a callre or current object that's why it shows correct message.
*/



// setTimeout(() => object.logMessage(), 2000)
/*
In this function the mechanism is that first we provide arrow function in the setTimeout function
then the arrow function follows the lexical scope means it does not have it's own "this" keyword
means it goes to the "object" then find the logMessage function in that function it will find "this"
keyword. hence it follow lexical scope so it will consider the "object" as a current object in which
it currently present then gives the properties of that object.
*/










/*
Qs4. What is the output of the following code :
output: undefine

In this code first we call the method of object1 in side method we pass reference to 
callback function with some arguments that arguments stored in array-like object called "argument"
object, then in the method we call callback() function direclty ko huwa hai isliye browser me
this ka meaning window object honga or ye length ko window object me search karenga of return karenga
uski value, window object me lenght property total number of frames means iframe in one window
ka count hota hai ager nahi hai to zero agar hai to uska count.
*/


let length = 4;
function callback() {
console.log(this.length);
}

const object1 = {
length: 5,
method(callback) {
    callback();
},
};

object1.method(callback, 1, 2);

/*

 

*/