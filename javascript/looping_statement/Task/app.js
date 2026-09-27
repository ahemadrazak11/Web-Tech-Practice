let todo = [];

let req = prompt("Please Enter Your Request.");

while(true){

    if(req == "quit"){
        console.log("Quitting the App...!");
        break;
    }
    else if(req == "add"){
        let Task = prompt("Please Enter The Task");
        todo.push(Task);
        console.log("Task Added.");
    }
    else if(req == "list"){
        console.log("-------------------");
        for(let list = 0; list<todo.length; list++){
            console.log(`[${list}] = ${todo[list]}`);
        }
        console.log("-------------------");
        console.log("Task Listed.");
    }
    else if(req == "delete"){
        let ind = prompt("Enter The Task Index");

        todo.splice(ind, 1);
        console.log("Task Deleted.")
    }
    else{
        console.log("Wrong Request.")
    }

    req = prompt("Please Enter Your Request.");    
}