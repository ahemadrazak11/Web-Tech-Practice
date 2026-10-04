// CallBackFunction

function greet(name, callBack){

    console.log("Hello " + name);

    callBack();
}

function message(){
    console.log("Welcome!");    
}

greet("Ahemad Raza Khan,", message);