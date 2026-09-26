let guess = prompt("Enter The Movie Name");

while((guess != "Animal") && (guess != "Quite")){

    console.log("Wrong Guess...!");

    guess = prompt("Please Re-Enter Movie Name or 'Quite'");
}

if(guess == "Animal"){
    console.log("Correct Guess.");
}