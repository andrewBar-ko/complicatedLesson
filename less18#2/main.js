'use strict';

' use strict ';

const start = document.getElementById('start'),
    reset = document.getElementById('reset'),
    body = document.querySelector('body'),
    plane = document.querySelector('.plane');
let flyInterval = 0;

const resetCanvas = () => {
    if (flyInterval > 0) {
        cancelAnimationFrame(flyInterval);
    }
    plane.style.left = '1px';
    plane.style.top = '50px';
    start.textContent = 'Start';
};

const flyAnimate = () => {
    const l = parseFloat(plane.style.left);

    if (l < 500) {
        plane.style.left = (l + 1) + 'px';
        flyInterval = requestAnimationFrame(flyAnimate);
    } else {
        cancelAnimationFrame(flyInterval);
        start.textContent = 'Stoped';
        alert('Для повтора нажмите "Reset"!');
    }
};

const startAnimation = () => {
    if (start.textContent === 'Start') {
        start.textContent = 'Pause';
        flyInterval = requestAnimationFrame(flyAnimate);
    } else if (start.textContent !== 'Stoped') {
        start.textContent = 'Start';
        cancelAnimationFrame(flyInterval);
    }
};

start.addEventListener('click', startAnimation);
reset.addEventListener('click', resetCanvas);

resetCanvas();