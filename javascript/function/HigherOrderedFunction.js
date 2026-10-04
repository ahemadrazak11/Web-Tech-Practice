//HigherOrderedFunction

// The Higher Ordered Function is Nothing but a function that can accept a function as an argument
// or return the function is called as Higher Order Function.
// The Higher Order Function is only accept the function expression 
// or function expression's variable as an argument

function printGreet(func, num){

    for(let i=0; i<num; i++){
        func();
    }
}

let greet = function(){
    console.log("Hello");
}

printGreet(greet, 3)