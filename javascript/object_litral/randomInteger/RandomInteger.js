let num = prompt("Enter The Max Number.");

//random = Math.floor(Math.random() * num) + 5; //range from 5 to num only.
//random = Math.floor(Math.random() * num) + 4; //range from 4 to num only.

const random = Math.floor(Math.random() * num) + 1; //range from 1 to num only.
let guess = prompt("Guess The Number Or Enter 0 to exit.");
while(guess != 0){

    if(guess == random)
    {
        console.log("Congratulations, Right Guess...!");
        break;
        
    }
    else if(guess > random){
        guess = prompt("Hint: you guess too large, please try again!");
        
    }
    else{
        guess = prompt("Hint: your number to small, please try again!");
    }

    
    
    

}

console.log("The Number was =>", random);

console.log("Exited...!");
