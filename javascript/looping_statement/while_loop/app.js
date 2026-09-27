// let guess = prompt("Enter The Movie Name");

// while((guess != "Animal") && (guess != "Quite")){

//     console.log("Wrong Guess...!");

//     guess = prompt("Please Re-Enter Movie Name or 'Quite'");
// }

// if(guess == "Animal"){
//     console.log("Correct Guess.");
// }

// for of loop

let arr = ["Apple", "Mango", "Banana", "Pomegranent", "Orange", "Papaya", "Chiku"];

for(fruite of arr){
    console.log(fruite);
}

// it also suport String.

let str = "AhemadRazaKhan";

for(s of str){
    console.log(s);
}


// nested for of loop

let heroSet = [["Ahemad", "Raza", "Khan"], ["Zaid", "Asim", "Anas", "Aasif"]];

for(list of heroSet){
    for(hero of list){
        console.log(hero);
    }
}