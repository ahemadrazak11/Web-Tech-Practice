
"use strict";


// =====================================
// 1. SELECT ELEMENTS
// =====================================

const message = document.getElementById("message");
const description = document.getElementById("description");
const topicList = document.getElementById("topicList");

const changeTextBtn = document.getElementById("changeTextBtn");
const styleBtn = document.getElementById("styleBtn");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const resetBtn = document.getElementById("resetBtn");

const topicInput = document.getElementById("topicInput");
const emptyMessage = document.getElementById("emptyMessage");


// =====================================
// 2. CHANGE TEXT CONTENT
// =====================================

changeTextBtn.addEventListener("click", function () {
    message.textContent = "DOM Updated Successfully!";
    description.textContent =
        "You have changed this content using JavaScript.";

    // Example of reading an attribute
    console.log(message.getAttribute("id"));
});


// =====================================
// 3. MANIPULATE CSS CLASSES
// =====================================

styleBtn.addEventListener("click", function () {
    message.classList.toggle("highlight");

    const isHighlighted = message.classList.contains("highlight");

    styleBtn.textContent = isHighlighted
        ? "Remove Style"
        : "Apply Style";
});


// =====================================
// 4. CREATE AND ADD ELEMENTS
// =====================================

function createTopic(topicName) {
    // Create a new <li> element
    const li = document.createElement("li");

    // Create a span for the topic text
    const span = document.createElement("span");
    span.textContent = topicName;

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.setAttribute("type", "button");
    removeButton.setAttribute("aria-label", `Remove ${topicName}`);

    // Add children to the list item
    li.append(span, removeButton);

    return li;
}

function updateEmptyMessage() {
    emptyMessage.hidden = topicList.children.length !== 0;  
}

function addTopic() {
    const topicName = topicInput.value.trim();

    // Validate input
    if (topicName === "") {
        topicInput.focus();
        return;
    }

    // Create and append the new element
    const newTopic = createTopic(topicName);
    topicList.append(newTopic);

    // Clear the input
    topicInput.value = "";
    topicInput.focus();

    updateEmptyMessage();
}

addBtn.addEventListener("click", addTopic);

// Also allow Enter to add a topic
topicInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTopic();
    }
});


// =====================================
// 5. REMOVE INDIVIDUAL ELEMENTS
// =====================================

// Event delegation: listen on the parent list
topicList.addEventListener("click", function (event) {
    // Check whether the clicked element is a remove button
    const removeButton = event.target.closest(".remove-btn");

    if (!removeButton || !topicList.contains(removeButton)) {
        return;
    }

    // Navigate to the parent <li> and remove it
    const listItem = removeButton.parentElement;
    listItem.remove();

    updateEmptyMessage();
});


// =====================================
// 6. REMOVE ALL ELEMENTS
// =====================================

clearBtn.addEventListener("click", function () {
    // Remove all child nodes from the list
    topicList.replaceChildren();

    updateEmptyMessage();
});


// =====================================
// 7. RESET THE PLAYGROUND
// =====================================

function resetPlayground() {
    // Restore the original text
    message.textContent = "Hello, Ahemad!";
    description.textContent =
        "Use the buttons below to manipulate this page.";

    // Remove the applied CSS class
    message.classList.remove("highlight");

    // Restore button labels
    styleBtn.textContent = "Apply Style";

    // Re-create the original list items
    topicList.replaceChildren(
        createTopic("JavaScript"),
        createTopic("DOM")
    );

    // Clear the input
    topicInput.value = "";

    updateEmptyMessage();
}

resetBtn.addEventListener("click", resetPlayground);


// =====================================
// 8. INITIALIZE THE PAGE
// =====================================

updateEmptyMessage();

console.log("DOM Playground is ready!");