let pTag = document.querySelectorAll(".msg");

console.log(pTag);

// pTag.forEach((el) => {
//     console.log(el.textContent);
    
// });

let pOne = document.getElementsByTagName("p");

console.log(pOne);

let newP = document.createElement("p");

newP.setAttribute("class", "msg");

let body = document.querySelector('body');

body.append(newP);