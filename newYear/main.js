'use strict';


const yearEnd = document.querySelector('.year-end'),
    date = new Date(),
    time = date.toLocaleTimeString('ru'),
    hour = date.getHours();


let hi;

if (hour >= 5 && hour < 12) {
  hi = 'Доброе утро!';
} else if (hour >= 12 && hour < 18) {
  hi = 'Добрый день!';
} else if (hour >= 18 && hour < 24) {
  hi = 'Добрый вечер!';
} else if (hour >= 0 && hour < 5) {
  hi = 'Доброй ночи!';
}


const getWeek = () => {

    const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

    let today = date.getDay();

    if ( today === 0) { 
        today = 6; 
    } else { 
        today--; 
    }
    
    return week[today];

};
// Таймер 
//Можно установить любую дату
const nextDate = new Date("December 31, 2020"),
//Количество миллисекунд в одном дне
msPerDay = 24*60*60*1000,
//Высчитываем количество дней
daysLeft = Math.round((nextDate.getTime() - date.getTime())/msPerDay);

let dayname = "",
    ds = "" + daysLeft,
    //Вырезаем последнею цифру
    dd=parseInt(ds.substr(ds.length-1));

//Склоняем слово ДЕНЬ
if( daysLeft > 4 && daysLeft < 21 ){
    dayname = " дней";
} else if( dd === 1 ) {
    dayname=" день";
} else if(dd === 2 || dd === 3 || dd === 4 ){
    dayname=" дня";
} else {
    dayname=" дней";
}

if( daysLeft < 0 ) {
    alert("С новым годом!!!");
} else if( daysLeft === 0 ) {
    alert("Завтра новый год!");
}



yearEnd.innerHTML = `${hi} <br/>
  Сегодня: ${getWeek()} <br/>
  Текущее время: ${time} <br/>
  До нового года осталось ${daysLeft} ${dayname} !`;