
let id = setInterval(() => {
    console.log("Hello...!");
    
}, 1000);

console.log(id);

// every 1 second it will stop and print after 1 second.

// after 6 seconds it will stop working.
setTimeout(() => {
    clearInterval(id); // it will terminates the setInterval() function.
}, 6000);