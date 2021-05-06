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
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    };

    // Must convert numbers to string so JS doesn't just add the numbers together
    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    };

    selectOperation(operation) {
        if (this.currentOperand === "") return;
        if (this.previousOperand !== "") {
            this.operate();
        };
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    };
    
    operate() {
        let computation
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case "+":
                computation =  prev + current;
                break;
            case "-":
                computation =  prev - current;
                break;
            case "x":
                computation =  prev * current;
                break;
            case "÷":
                computation =  prev / current;
                break;
            case "x<sup>y</sup>":
                computation =  prev ** current;
                break;
            default:
                return;
        };
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = "";
    };

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split(".")[0]);
        const decimalDigits = stringNumber.split(".")[1];
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = "";
        } else {
            integerDisplay = integerDigits.toLocaleString("en", {maximumFractionDigits: 0});
        };
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    };

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = "";
        }
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
    });
});

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.selectOperation(button.innerText);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener("click", () => {
    calculator.operate();
    calculator.updateDisplay();
});

clearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
})