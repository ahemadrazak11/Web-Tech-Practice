/*
JavaScript Printing Ways.
1. console object
2. documnet object
3. window object
4. textContent JavaScript property
5. innerHTML JavaScript property
6. innerText JavaScript property
*/

// 1. console object
console.log("This JavaScript");
console.log("first", "second", "third");
console.warn("this warning printed by console");
console.error("this is error printed by console");
console.info("this info printed by console");
console.log(console);
console.dir(console);

// 2. document object
// document.write("this is text printed in the body by document object using write() function.<br/>");
// document.writeln("<b>this text printed by document object using writeln() function.</b><br/>");
// document.writeln("FirstContent<br/>");
// document.writeln("<b style='font-size: 32px; color: lightgray; background-color: navy'>SecondContent</b>");

//3. window object

// window.document.write("this text is printed by window object");
window.console.log("this text is printed by window object");


//4.innerHTML java script property
document.getElementById("heading").innerHTML="<b style='color: red;'>Hi, this is JS inseted HTML code.</b>";

//5. innerText java script property.
document.getElementById("block_one").innerText="<b style='color: red;'>this is inner text property of JS</b> (this property consider HTML tag as a text only.)";

//6. innerContent JavaScript property.
