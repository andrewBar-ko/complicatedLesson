'use strict';

const num = 266219;

const multip = (num) => {
    return [...num.toString()].reduce((p, v) => p * v);
};
console.log(multip(num));

const multiDegree = multip(num)**3;

console.log(multiDegree);

const multiString = String(multiDegree).slice(0,2);

alert(multiString);