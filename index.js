// Your code goes here
let firstSentence = document.querySelector('p')

document.addEventListener("DOMContentLoaded", function() {
    updateDOM()
}); 

function updateDOM() {
    firstSentence.textContent = "This is really cool!"
}
