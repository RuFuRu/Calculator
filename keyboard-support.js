document.addEventListener('keydown',(e) => {
    display.setAttribute('style', 'border: 2px dotted rgb(37, 37, 37);');
    //console.log(e.key);
    const digitRegex = /[0-9]/
    if(digitRegex.test(e.key)) {
        display.textContent += e.key;
    }

    const operators = ['+','-','/','*','^'];
    operators.forEach(oper => {
        if(e.key === oper) {
            operator = e.key;
            operatorList.push(operator);
            evaluate();
        }
    })

    
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

})