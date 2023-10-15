let previewValue = "";
let currentValue = "";
let operator = "";

document.addEventListener("DOMContentLoaded", function() {
    // storing html components on js
    let clean = document.querySelector("#clean");
    let equal = document.querySelector(".equalBtn");
    let decmial = document.querySelector("#decimal");

    let numbers = document.querySelectorAll(".number")
    let operators = document.querySelectorAll(".opeator")

    let previousScreen = document.querySelector("#lastOperationScreen");
    let currentScreen = document.querySelector("#currentOperationScreen");

    numbers.forEach((numbers) => numbers.addEventListener("click", function(event){
        if(currentValue.length <= 5){
            handleNumber(+event.target.textContent)
            currentScreen.textContent = currentValue;
        };
    }));

    operators.forEach((operators) => operators.addEventListener("click" , function(e){
        handleOperators(e.target.textContent)
        previousScreen.textContent = `${previewValue} ${operator}`;
        currentScreen.textContent = currentValue;
    }))

    clean.addEventListener("click", ()=>{
        previewValue = ""
        currentValue = ""
        operator = ""
        previousScreen.textContent = "";
        currentScreen.textContent = 0;
    });

    equal.addEventListener("click", function(){
        calculate();
        previousScreen.textContent = "";
        currentScreen.textContent = previewValue;
    })

    decmial.addEventListener("click", function(){
        if(!currentValue.includes(".")){
            currentValue += ".";}
    })
})

function handleNumber(num){
    currentValue += num;
}

function handleOperators(op){
    operator = op;
    previewValue = currentValue;
    currentValue = "";
}

function calculate(){
    previewValue = Number(previewValue);
    currentValue = Number(currentValue);

    if (operator == "/"){
        previewValue /= currentValue;}
    else if (operator == "-"){
       previewValue -= currentValue}
    else if (operator == "*"){
        previewValue *= currentValue;}
    else if (operator == "+"){
        previewValue += currentValue;}
    previewValue = roundNumber(previewValue).toString();
    currentValue = previewValue.toString();

}

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}
