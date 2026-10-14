// let i = 0;

// do{
//     console.log(i++);
// }
// while(i<0);


let pass = prompt("Enter the password.")
let fl = false
do{
    if(pass.length >= 8)
    {
        console.log("Password Generated...!");
        fl = true;
        
    }
    else{
        pass = prompt("Re-Enter the password");
    }
}while(!fl);