// Qs1. Create a new input and button element on the page using JavaScript only. Set the
// text of button to “Click me”;


let input = document.createElement('input');
let btn = document.createElement('button');

btn.innerText='Click Me';

let body = document.querySelector('body');
body.append(input);
body.append(btn);





// Qs2. Add following attributes to the element :
// - Change placeholder value of input to “username”
// - Change the id of button to “btn”


input.setAttribute('placeholder', 'username');
input.setAttribute('id', 'username');
input.setAttribute('autocomplete', 'username');

btn.setAttribute('id', 'btnn');


// Qs3. Access the btn using the querySelector and button id. Change the button
// background color to blue and text color to white.


document.querySelector('#btnn').classList.add('btn');



// Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined.
// Change its color to purple.


let h1 = document.createElement('h1');

h1.innerText="DOM Practice";

body.insertAdjacentElement('afterbegin', h1);

h1.classList.add('heading');

// Qs5. Create a p tag on the page and set its text to “Apna College Delta Practice”,
// where Delta is bold. 

let para = document.createElement('p');


para.innerHTML="Apna College <b>Delta</b> Practice";

body.insertAdjacentElement('beforeend', para);