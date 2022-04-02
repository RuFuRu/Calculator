function add(a,b) {
    let c = a + b;
    return c;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}

function operate(operator,a,b) {
    switch(true) {
        case operator === '+':
            return add(a,b);
        case operator === '-':
            return subtract(a,b);
        case operator === '*':
            return multiply(a,b);
        case operator === '/':
            return divide(a,b);
        default:
            return "Error";
    }
}

const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const operations = document.querySelectorAll('.operation');
const clear = document.querySelector('.clear');

console.log(operations);
console.log(numbers);
let displayNum;
let operator;
let a = [];
let result = 0;
let result2 = 0;
let clicked = 0;
let operClickCount = 0;

numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.setAttribute('style', 'border: 2px dotted rgb(37, 37, 37);');
        display.textContent += number.textContent;
        return displayNum = display.textContent;
    })
});

clear.addEventListener('click',clearDisplay);


operations.forEach(operation => {
    operation.addEventListener('click', () => {
        switch(true) {
            case operation.classList.contains('addition'):
                operator = '+';
                evaluate();
                break;
            case operation.classList.contains('equals'):
                equals();
                break;
        }
    })
})



function evaluate() {
    operClickCount++;
    if(operClickCount < 2) {
        a.push(parseInt(display.textContent));
        console.log(a); 
    }

    if(operClickCount >= 2) {
        a.push(parseInt(display.textContent));
        a.push(operate(operator,a[a.length - 2],a[a.length - 1]));
        a.splice(0,2);
        console.log(a);
    }
    display.textContent = '';
}

function equals() {
    if(a.length < 2) {
        a.push(parseInt(displayNum));
        display.textContent = '';
        display.textContent = operate(operator,a[a.length - 2],a[a.length - 1]);
        result2 = display.textContent;
        clicked++;
        operClickCount = 0;
    }
    else if(a.length >= 2) {
        a.push(parseInt(displayNum));
        display.textContent = operate(operator,a[a.length - 2],a[a.length - 1]);
        result2 = display.textContent;
        clicked++;
        operClickCount = 0;
    }
}

function clearDisplay() {
    a = [];
    display.textContent = null;
    displayNum = null;
    console.log(a,display.textContent,displayNum);
}