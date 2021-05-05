const display = document.querySelector(".display");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const powerBtn = document.getElementById("power");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");
const subtractBtn = document.getElementById("subtract");
const addBtn = document.getElementById("add");
const equalsBtn = document.getElementById("equals");
const negativeBtn = document.getElementById("negative");
const decimalBtn = document.getElementById("decimal");
const zeroBtn = document.getElementById("zero");
const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");

// Add
function add(a,b) {
    return a + b;
};

// Subtract
function subtract(a,b) {
    return a - b;
};

// Multiply
function multiply(a,b) {
    return a * b;
};

// Divide 
function divide(a,b) {
    if (b == 0 ) {
        return "No no no! Bad user!"
    } else {
        return a/b;
    }
};

// Power
function power(a,b) {
    return a ** b;
};