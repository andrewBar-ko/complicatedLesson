'use strict';

const registerUser = document.querySelector('#register-user'),
    login = document.querySelector('#login'),
    registeredName = document.querySelector('#registered-name'),
    list = document.querySelector('#list'),
    deleteUser = document.querySelector('#delete-user');

// Дата регистрации
const dateRegist = {

    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'

};

const registName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ] + [a-zA-Zа-яА-Я']?$/;

// Массив с получеными данными о планах
let listData = localStorage.getItem('listData') ?
// извличение из JSON и декодировка в массив
JSON.parse(localStorage.getItem('listData')) : [];

const addToStorage = () => {
    localStorage.setItem('listData', JSON.stringify(listData));
};
addToStorage();

 // Добавление в список
const register = () => {

    list.textContent = '';
   
    listData.forEach((item) => {
        let li = document.createElement('li');
        li.classList.add('list-item');
        
        li.innerHTML += '<span>' + '<b>Имя:</b>' + 
        item.userName + '  <b>фамилия:</b> ' + 
        item.lastName + '  <b>зарегистрирован:</b> ' +  
        item.regDate + '</span>' + '  ' +
        '<a href="#" class="btn btn-delete" id="delete-user">' +
         'X' + '</a>';

        list.append(li);
        
        // Удаление дел
        const deleteUser = li.querySelector('#delete-user');

        deleteUser.addEventListener('click',() => {

            listData.forEach(() => {
                for (let i = listData.length; i--;) {
                    if (listData[i] === item) {
                        listData.splice(i, 1);
                    }
                    
                    localStorage.removeItem(listData[i]);
                    register();
                    addToStorage(); 
                }
                
            });
            register();
        });

    });

    const start = () => {

        let promptName = prompt('Введите через пробел Имя и Фамилию пользователя');

        if (promptName === null) {
            return;
        }
      
        if (!registName.test(promptName) || 
            promptName.split(' ').length - 1 > 1 || 
            promptName.split(' ').length - 1 < 1) {

            alert('Ошибка ввода данных!');
            return;
        } 
    
        let promptLogin = prompt('Введите логин');
    
        if (promptLogin === null) {
            return;
        }
    
        let promptPass = prompt('Введите пароль');
    
        const arr = promptName.split(' ');
    
        const date = new Date();
        const toDay = date.toLocaleString('ru', dateRegist);
    
        const newText = {
            userName: arr[0],
            lastName: arr[1], 
            login: promptLogin,
            password: promptPass,
            regDate: toDay
        };
          
        listData.push(newText);
        register();
        addToStorage();
        registerUser.removeEventListener('click', start);
    };
    
    registerUser.addEventListener('click', start); 

};

const authorization = () => {

    let promptLogin = prompt('Введите логин');
  
    if (promptLogin === null) {
      return;
    }
  
    let promptPass = prompt('Введите пароль');
  
    if (promptPass === null) {
      return;
    }
  
    let promptLoginValue;
    listData.forEach((item) => { 
        if (item.login === promptLogin && 
            item.password === promptPass) {
            promptLoginValue = promptLogin;
        } 

    });
  
    if (promptLoginValue === undefined) {
        alert('Пользователь не найден');
    } else {
        registeredName.textContent = promptLogin;
    }
};

login.addEventListener('click', authorization);

register();