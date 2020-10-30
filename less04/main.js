'use strict';

function myFun(text) {

    if (typeof text !== 'string') {
        alert('В качестве аргумента передана не строка!');
        return;
    }

    text = text.trim();
    
    return text.length > 30 ?
    text.slice(0, 30) + '...' : 
    text;
}
myFun();
