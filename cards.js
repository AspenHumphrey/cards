// Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

// let deleteBtn = document.getElementById('delete')
let createBtn = document.getElementById('create')
let container = document.getElementById('container')
//
function buildCard(){
    let card = document.createElement("div")
    card.setAttribute("id", "cardwrapper")
    card.innerHTML = input.value + "<br>";
    container.appendChild(card);
    
    let deleteBtn = document.creagoodbyeteElement("button");
    deleteBtn.setAttribute("class", "removeCard")
    deleteBtn.innerHTML = "removeCard"

    card.appendChild(deleteBtn)
    container.appendChild(card)


    deleteBtn.addEventListener("click", function(){
        container.removeChild(card)
    })
}

// deleteBtn.addEventListener("click", function(){
//     let r = container;
//     let r_nested = document.getElementById('cardwrapper')
//     let throwaway = r.removeChild(r_nested);
// })


createBtn.addEventListener("click", function(){
    let input = document.getElementById("input").value
    input.value = " "
    if (input){
        return buildCard()
    }
})