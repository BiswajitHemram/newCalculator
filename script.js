let previewValue = "";
let currentValue = "";
let operator = "";

document.addEventListener("DOMContentLoaded", function() {
    // storing html components on js
    let clean = document.querySelector("#clean");
    let equal = document.querySelector("#equalBtn");
    let decmial = document.querySelector("#decimal");

    let numbers = document.querySelectorAll(".number")
    let operators = document.querySelectorAll(".opeator")

    let previousScreen = document.querySelector("#lastOperationScreen");
    let currentScreen = document.querySelector("#currentOperationScreen");

    numbers.forEach((numbers) => numbers.addEventListener("click", function(event){
        if(currentValue.length <= 5){
            handleNumber(+event.target.textContent)
            currentScreen.textContent = currentValue;
        }
    }))
})

function handleNumber(num){
    currentValue += num;
}