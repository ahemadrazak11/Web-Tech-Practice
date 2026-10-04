//HigherOrderedFunction

// The Higher Ordered Function is Nothing but a function that can accept a function as an argument
// or return the function is called as Higher Order Function.

function printGreet(func, num){

    for(let i=0; i<num; i++){
       console.log( func());
    }
}

function greet(){
    return "Hello "
}

printGreet(greet, 3)



//  function concatStr(fn, str){
//     console.log(fn() + str);
// }

// concatStr(greet, "World");


// Case 1 : accept function.

function cal(a,b, operation){

    return operation(a,b);
}

function add(a, b){
    return a + b;
}

console.log(cal(10, 20, add));


// Case 2 Return Function.

function outer(){

    function inner(){
        console.log("This is inner function"); 
    }

   return inner;
}

let result = outer();
result();
