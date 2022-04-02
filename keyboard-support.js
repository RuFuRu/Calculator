document.addEventListener('keydown',(e) => {
    display.setAttribute('style', 'border: 2px dotted rgb(37, 37, 37);');
    //console.log(typeof e.key);
    let digitRegex = /[0-9]/
    if(digitRegex.test(e.key)) {
        display.textContent += e.key;
    }

})