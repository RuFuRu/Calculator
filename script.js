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
        // default:
        //     return "Error";
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
let operatorList = [];
let a = [];
let a1 = 0;
let b1 = 0;
let c1 = 0;
let counter = 0;
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
                operatorList.push(operator);
                evaluateAdd();
                break;
            case operation.classList.contains('subtraction'):
                operator = '-';
                operatorList.push(operator);
                evaluateSub();
                break;
            case operation.classList.contains('equals'):
                equals();
                break;
        }
    })
})



function evaluateAdd() {
    operClickCount++;
    if(operClickCount < 2) {
        a1 = parseInt(display.textContent);
    }

    if(operClickCount >= 2) {
        console.log(operatorList);

        if(operatorList[operatorList.length - 1] = "+") {
            b1 = parseInt(display.textContent);
            a.push(operate(operator,a1,b1));
            a1 = a[counter++];
        }

        console.log(a);
    }
    display.textContent = '';
}

function evaluateSub() {
    operClickCount++;

    switch(true) {
        case operatorList[operatorList.length - 2] !== '-':
            a.push(operate(operatorList[operatorList.length - 2],a[0],a[1]));
            console.log(a);
            display.textContent = '';
            break;
        case operClickCount < 2:
            a.push(parseInt(display.textContent));
            console.log(operatorList);
            console.log(a);
            break;
        case operClickCount >= 2:
            a.push(parseInt(display.textContent));
            a.push(operate(operator,a[a.length - 2],a[a.length - 1]));
            console.log(a);
            a.splice(0,2);
            break;
    }
    
    /*if(operatorList[operatorList.length - 2] !== '-') {
        //a.push(parseInt(display.textContent));
        a.push(operate(operatorList[operatorList.length - 2],a[0],a[1]));
        console.log(a);
        display.textContent = '';
    }
    
    if(operClickCount < 2) {
        a.push(parseInt(display.textContent));
        console.log(operatorList);
        console.log(a);
    }
    
    if(operClickCount >= 2) {
        a.push(parseInt(display.textContent));
        a.push(operate(operator,a[a.length - 2],a[a.length - 1]));
        console.log(a);
        a.splice(0,2);
    }*/

    display.textContent = '';
}

function equals() {
    if(operClickCount === 1) {
        b1 = parseInt(display.textContent);
        console.log(b1);
        display.textContent = operate(operator,a1,b1);
        operClickCount = 0;
    }
    else if(operClickCount > 1) {
        b1 = parseInt(display.textContent);
        display.textContent = operate(operator,a1,b1);
        operClickCount = 0;
    }
}

function clearDisplay() {
    a = [];
    display.textContent = null;
    displayNum = null;
    console.log(a,display.textContent,displayNum);
}