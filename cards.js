// Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

let createBtn = document.getElementById('create');
let container = document.getElementById('container');
let userInput = document.getElementById("input");

function buildCard(){
    let card = document.createElement("div");
    card.setAttribute("id", "cardwrapper");
    card.innerHTML = input.value + "<br>";
    container.appendChild(card);
    
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "removeCard");
    deleteBtn.innerHTML = "removeCard"

    card.appendChild(deleteBtn);
    container.appendChild(card);


    deleteBtn.addEventListener("click", function(){
        container.removeChild(card);
    })
};


createBtn.addEventListener("click", function(){
    let input = document.getElementById("input");
    input.value = " "
    if (input){
        return buildCard()
    }
});


function clearTextBox(event, inputText) {
  if (inputText != "") {
    userInput.value = "";
  }
};

userInput.addEventListener("keypress", function(event) {
    // invokes function to take any keypress to submit the user input to the DOM.
    if (event.key === "Enter") {
        let inputText = userInput.value;
        clearTextBox(inputText);
    }
}); 