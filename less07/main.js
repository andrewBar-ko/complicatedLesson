'use strict';

// Создать массив week
// и записать в него дни недели в виде строк!

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const day = new Date();
let weekDay = day.getDay();

if ( weekDay === 0) { weekDay = 6; } else { weekDay--; }

week.forEach((day, i) => {

    let str = day;

    if (i === weekDay) {
        str = `<b>${day}</b>`;
    } else {
        str = `${day}`;
    }

    if (i === 5 || i === 6) { 
        str = `<i>${str}</i>`; 
    }

    document.body.insertAdjacentHTML('beforeend', `<div>${str}</div>`);

});