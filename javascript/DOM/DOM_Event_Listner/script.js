
const heading = document.querySelector("h1");
const container = document.querySelector(".container");
const button = document.querySelector("button");

button.addEventListener("click", getColor);

function getColor(){

    let r = Math.floor(Math.random() * 225);
    let g = Math.floor(Math.random() * 225);
    let b = Math.floor(Math.random() * 225);
    
    let color = `rgb(${r}, ${g}, ${b})`;
    heading.innerText = color;

    container.style.backgroundColor = color;
}


let el = document.querySelector(".c");


el.addEventListener('click', cC);
function cC(){
    this.style.backgroundColor = "green";
}