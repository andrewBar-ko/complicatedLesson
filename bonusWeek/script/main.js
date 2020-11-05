'use strict';

const registerUser = document.querySelector('#register-user'),
login = document.querySelector('#login'),
list = document.querySelector('#list'),
listItem = document.querySelector('#list-item'),
deleteUser = document.querySelector('#delete-user');

// Массив с получеными данными о планах
let listData = localStorage.getItem('item') ?
// извличение из JSON и декодировка в массив
 JSON.parse(localStorage.getItem('item')) : [];

 // Добавление в список
const register = () => {
    listData.textContent = '';
   

    listData.forEach((item) => {
        let li = document.createElement('li');
        li.classList.add('List-item');
        
        li.innerHTML += '<span class="text-todo">' + item.value + '</span>' +
            '<div class="todo-buttons">' +
                '<button class="todo-remove"></button>' +
                '<button class="todo-complete"></button>' +
            '</div>';

        // Удаление дел
        const deleteUser = li.querySelector('#delete-user');

        deleteUser.addEventListener('click',(e) => {

            listData.forEach(() => {
                for (let i = listData.length; i--;) {
                    if (listData[i] === item) {
                        listData.splice(i, 1);
                    }
                }
            });
            
            localStorage.setItem('item', JSON.stringify(listData));
             
            register();
        });

    });

 
};
// К форме todoControl навешиваем событие submit
registerUser.addEventListener('submit', function(e) {
    e.preventDefault();  // Отмена перезагрузки страницы

    const remember = () => {
        
    }
    
    // Новое дело
    const newList = {
        value: headerInput.value,
        completed: false, 
    };

    // Проверка на пустоту и добавление в массив
    if(headerInput.value.trim() !== '') {
        listData.push(newList);
    }
    
    // Кодировка массива в JSON и сохранение в обьекте localStorage
    localStorage.setItem('item', JSON.stringify(listData));
    headerInput.value = '';
     
    register();
 
});

register();