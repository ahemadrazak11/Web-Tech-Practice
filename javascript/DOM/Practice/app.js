// Practice.

let container = document.createElement("div");
container.classList.add('container');
document.querySelector('body').append(container);

let para = document.createElement('p');
container.append(para);
document.querySelector(".container p").innerText = "Hey I'm Red";
document.querySelector(".container p").style.color="red";


container.append(document.createElement('h3'));
container.querySelector(".container h3").innerHTML = "Hey I'm Blue";
document.querySelector(".container h3").style.color='blue';