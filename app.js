class Calculator {
    // Allows us to set text elements in calculator class
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    };

    // Sets all values to default
    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    };

    delete() {

    };

    appendNumber(number) {
        this.currentOperand = number;
    };

    selectOperation(operation) {

    };
    
    operate() {

    };
     
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
    };
};

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})