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

    if(e.key === '=') {

    }

})