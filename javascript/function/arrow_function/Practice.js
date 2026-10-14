
// 1. Basic Credential Validation (Implicit Return)

// Scenario: You need a quick utility function to check if the user entered anything 
// into the login fields.
// • Task: Write a single-line arrow function named isValidInput that takes a string (text) 
// as a parameter. It should return true if the text is not empty and its length is 
// greater than 3 characters, otherwise false.
// • Requirement: Use an implicit return (no curly braces {} and no return keyword)

const pass = prompt("Enter the password.");


// implicit return function.
const isValidInput = (pass) => (

        (pass.length>0 && pass.length > 3)? true : false      

);

console.log(isValidInput(pass));
