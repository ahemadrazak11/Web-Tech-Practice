
// this line is not written in the web page because we embbeding the JS file after document closed.
// that's why text not writtten. we have to open the document to write the text.
document.write("this is the external JavaScript text.");

// document Object Modle Manipulation.
// this DOM manipulation does not happen because the HTML code will excuted 
// after the JavaScript emmbedding means it not get the HTML element id.
// that's why we have to use defer attribute to pausing the external JS execution till the 
// all html element rendering.

document.getElementById("heading").textContent="Changed Heading by DOM";
