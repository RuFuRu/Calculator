document.addEventListener('keyup',(e) => {
    display.setAttribute('style', 'border: 2px dotted rgb(37, 37, 37);');

    
    const digit = ['0','1','2','3','4','5','6','7','8','9'];
    digit.forEach(dig => {
        if(e.key === dig) {
            display.textContent += e.key;
        }
    })

    const operators = ['+','-','/','*','^'];
    operators.forEach(oper => {
        if(e.key === oper) {
            operator = e.key;
            operatorList.push(operator);
            evaluate();
        }
    })

    if(e.key === 'd' || e.key === 'D') {
        operator = '/';
        operatorList.push(operator);
        evaluate();
    }

    
    if(e.key === '=' || e.key === 'Enter') {
        equals();
    }


    if(e.key === '%') {
        display.textContent = display.textContent * 0.01;
    }


    if(e.key === 'C' || e.key === 'c') {
        clearDisplay();
    }

    if(e.key === 'Backspace') {
        correct();
    }

    if(e.key === '.') {
        addDecimalPoint();
    }

});
