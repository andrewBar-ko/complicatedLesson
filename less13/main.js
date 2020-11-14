'use strict';

const getRandomColor = () => {
    let letters = '0123456789ABCDEF',
        color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const setBodyColor = () => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    document.querySelector('h1').textContent = newColor;
};

document.querySelector('button').addEventListener('click', setBodyColor);