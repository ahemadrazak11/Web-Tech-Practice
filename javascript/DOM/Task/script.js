// ====================================
// Element Selection
// ====================================

const heading = document.getElementById("heading");
const changeTextBtn = document.getElementById("changeTextBtn");
const styleBtn = document.getElementById("styleBtn");

// input field selection
const topicInput = document.getElementById("topic");
// add button selection
const addBtn = document.getElementById("addBtn");




// ====================================
// 1. Text Changing
// ====================================

changeTextBtn.addEventListener('click', function (){
    heading.innerText = "DOM Updated Successfully";
    console.log("change Text Button Clicked!");
});


// ====================================
// 2. Apply Style
// ====================================

styleBtn.addEventListener('click', function(){
    
    heading.classList.toggle("heading_style");
    
    styleBtn.innerText = heading.classList.contains("heading_style")? "Remove Style" : "Apple Style";
});


// ====================================
// 3. Create and add topic
// ==================================== 

function createTopic(topicName){

    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.textContent = topicName;

    button.innerText = "Remove"
    button.classList.add("remove_btn");
    button.setAttribute("type", "button");

    li.append(span, button);
    return li;
}


function addTopic(){
    const topicName = topicInput.value.trim();

    if(topicName === ""){
        topicInput.focus();
        return;
    }

    // create topic list item
    const newTopic = createTopic(topicName);

    // append topic into list
    const topicList = document.getElementById("topicList");
    topicList.append(newTopic);

    // clear the input
    topicInput.value = "";
    topicInput.focus();
}

addBtn.addEventListener('click', addTopic);