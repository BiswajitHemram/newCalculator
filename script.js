/* The code is declaring and initializing three variables: `previewValue`, `currentValue`, and
`operator`. */
let previewValue = "";
let currentValue = "";
let operator = "";

/* The code is adding an event listener to the `DOMContentLoaded` event, which is fired when the
initial HTML document has been completely loaded and parsed. */
document.addEventListener("DOMContentLoaded", function() {
    
    /* These lines of code are selecting elements from the HTML document using the
    `document.querySelector` and `document.querySelectorAll` methods and assigning them to
    variables. */
    let clean = document.querySelector("#clean");
    let equal = document.querySelector(".equalBtn");
    let decmial = document.querySelector("#decimal");

    let numbers = document.querySelectorAll(".number")
    let operators = document.querySelectorAll(".opeator")

    let previousScreen = document.querySelector("#lastOperationScreen");
    let currentScreen = document.querySelector("#currentOperationScreen");

/* The code is adding an event listener to each element in the `numbers` array. When one of these
elements is clicked, the event listener function is executed. */

    numbers.forEach((numbers) => numbers.addEventListener("click", function(event){
        if(currentValue.length <= 5){
            handleNumber(+event.target.textContent)
            currentScreen.textContent = currentValue;
        };
    }));

    /* The code is adding an event listener to each element in the `operators` array. When one of these
    elements is clicked, the event listener function is executed. Inside the function, it calls the
    `handleOperators` function and passes the text content of the clicked element as an argument. It
    then updates the `previousScreen` and `currentScreen` elements with the values of `previewValue`
    and `currentValue` respectively. */
    operators.forEach((operators) => operators.addEventListener("click" , function(e){
        handleOperators(e.target.textContent)
        previousScreen.textContent = `${previewValue} ${operator}`;
        currentScreen.textContent = currentValue;
    }))

    /* The `clean.addEventListener("click", () => { ... })` code is adding an event listener to the
    `clean` element. When the `clean` element is clicked, the event listener function is executed.
    Inside the function, it resets the values of `previewValue`, `currentValue`, and `operator` to
    empty strings, and sets the text content of the `previousScreen` element to an empty string. It
    also sets the text content of the `currentScreen` element to 0. Essentially, this code is
    responsible for clearing/resetting the calculator's values and screens when the "clean" button
    is clicked. */
    clean.addEventListener("click", ()=>{
        previewValue = ""
        currentValue = ""
        operator = ""
        previousScreen.textContent = "";
        currentScreen.textContent = 0;
    });

    /* The `equal.addEventListener("click", function(){ ... })` code is adding an event listener to the
    `equal` element. When the `equal` element is clicked, the event listener function is executed.
    Inside the function, it calls the `calculate` function to perform the calculation based on the
    current values of `previewValue`, `currentValue`, and `operator`. After the calculation is done,
    it sets the text content of the `previousScreen` element to an empty string and the text content
    of the `currentScreen` element to the value of `previewValue`. Essentially, this code is
    responsible for performing the calculation and updating the calculator's screens when the
    "equal" button is clicked. */
    equal.addEventListener("click", function(){
        calculate();
        previousScreen.textContent = "";
        currentScreen.textContent = previewValue;
    })

    /* The `decmial.addEventListener("click", function(){ ... })` code is adding an event listener to
    the `decmial` element. When the `decmial` element is clicked, the event listener function is
    executed. Inside the function, it checks if the `currentValue` variable does not already include
    a decimal point. If it doesn't, it appends a decimal point to the `currentValue` variable.
    Essentially, this code allows the user to add a decimal point to the current value being entered
    in the calculator. */
    decmial.addEventListener("click", function(){
        if(!currentValue.includes(".")){
            currentValue += ".";}
    })
})

/**
 * The function "handleNumber" adds a number to the current value.
 * @param num - The parameter "num" is a number that will be added to the variable "currentValue".
 */
function handleNumber(num){
    currentValue += num;
}

/**
 * The function "handleOperators" sets the operator variable to the given input and updates the
 * previewValue and currentValue variables.
 * @param op - The parameter "op" is the operator that is being passed to the function. It is used to
 * set the value of the "operator" variable.
 */
function handleOperators(op){
    operator = op;
    previewValue = currentValue;
    currentValue = "";
}

/**
 * The function calculates the result of an arithmetic operation based on the operator and the current
 * and preview values.
 */
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

/**
 * The roundNumber function rounds a given number to three decimal places.
 * @param num - The parameter "num" is a number that you want to round.
 * @returns the input number rounded to three decimal places.
 */
function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}
