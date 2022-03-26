function add(a,b) {
    return a + b;
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

const numbers = document.querySelectorAll('.one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .zero');
const display = document.querySelector('.display');
console.log(numbers);

numbers.forEach(number => {
    number.addEventListener('click', () => {
        switch(true) {
            case number.classList.contains('one'):
                display.textContent += 1;
                break;
            case number.classList.contains('two'):
                display.textContent += 2;
                break;
            case number.classList.contains('three'):
                display.textContent += 3;
                break;
            case number.classList.contains('four'):
                display.textContent += 4;
                break;
            case number.classList.contains('five'):
                display.textContent += 5;
                break;
            case number.classList.contains('six'):
                display.textContent += 6;
                break;
            case number.classList.contains('seven'):
                display.textContent += 7;
                break;
            case number.classList.contains('eight'):
                display.textContent += 8;
                break;
            case number.classList.contains('nine'):
                display.textContent += 9;
                break;
            case number.classList.contains('zero'):
                display.textContent += 0;
                break;
        }
        let displayNum = display.textContent;
        return displayNum;
    })
})