'use strict';

// Дни недели

let lang = prompt('Введите ru или en!'),
    ru = "Понидельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье",
    en = "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday";

// if
if (lang === 'ru') {
    alert(ru);
} else if (lang === 'en') {
    alert(en);
}

// Swith

switch(lang) {
    case "ru":
        console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
        break; 
    case "en":
        console.log("Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday");
}


// Многомерный массив

let langArr = [];
langArr.ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
langArr.en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(langArr[lang]);


// let namePerson
let namePerson = prompt("Введите имя!");

let userName = (namePerson === "Артем") ? "Директор":
    (namePerson === "Максим") ? "Преподаватель":
    (namePerson === "Александр") ? "Куратор":
    "Студент";

console.log(userName);