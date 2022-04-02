const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const operations = document.querySelectorAll('.operation');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');

console.log(operations[0]);
console.log(numbers);
let operator;
let operatorList = [];
let a = [];
let a1 = 0;
let b1 = 0;
let counter = 0;
let operClickCount = 0;

numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.setAttribute('style', 'border: 2px dotted rgb(37, 37, 37);');
        display.textContent += number.textContent;
    })
});

clear.addEventListener('click',clearDisplay);
backspace.addEventListener('click',correct);


operations.forEach(operation => {
    operation.addEventListener('click', () => {
        switch(true) {
            case operation.classList.contains('addition'):
                operator = '+';
                operatorList.push(operator);
                evaluate();
                break;
            case operation.classList.contains('subtraction'):
                operator = '-';
                operatorList.push(operator);
                evaluate();
                break;
            case operation.classList.contains('division'):
                operator = '/';
                operatorList.push(operator);
                evaluate();
                break;
            case operation.classList.contains('multi'):
                operator = '*';
                operatorList.push(operator);
                evaluate();
                break;
            case operation.classList.contains('equals'):
                equals();
                break;
        }
    })
})

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

function evaluate() {
    operClickCount++;

    if(operClickCount < 2) {
        a1 = parseInt(display.textContent);
    }

    if(operClickCount >= 2) {

        if(operatorList[operatorList.length - 2] !== operator) {
            b1 = parseInt(display.textContent);
            a.push(operate(operatorList[operatorList.length - 2],a1,b1));
            a1 = a[counter++];
            console.log(a);
        }
        
        console.log(operatorList);
        if(operatorList[operatorList.length - 2] === operator) {
            b1 = parseInt(display.textContent);
            a.push(operate(operator,a1,b1));
            a1 = a[counter++];
        }
        console.log(a);
    }

    display.textContent = '';
}

function seriously() {
    if(display.textContent === 'Infinity') {
        display.textContent = 'Did you seriously try to divide by 0 ?';
    }
}

function equals() {
    if(operClickCount === 1) {
        b1 = parseInt(display.textContent);
        console.log(b1);
        display.textContent = operate(operator,a1,b1);
        seriously();
        operClickCount = 0;
    }
    else if(operClickCount > 1) {
        b1 = parseInt(display.textContent);
        display.textContent = operate(operator,a1,b1);
        seriously();
        operClickCount = 0;
    }
}

function clearDisplay() {
    a = [];
    display.textContent = null;
    displayNum = null;
    console.log(a,display.textContent,displayNum);
}

function correct() {
    display.textContent = display.textContent.slice(0, -1);
}