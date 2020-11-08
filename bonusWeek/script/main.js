'use strict';

const registerUser = document.querySelector('#register-user'),
login = document.querySelector('#login'),
registeredName = document.querySelector('#registered-name'),
list = document.querySelector('#list'),
listItem = document.querySelector('#list-item'),
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

  const registName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/;

// Массив с получеными данными о планах
let listData = localStorage.getItem('item') ?
// извличение из JSON и декодировка в массив
 JSON.parse(localStorage.getItem('item')) : [];

 const addToStorage = () => {
    localStorage.setItem('listData', JSON.stringify(listData));
  };


 // Добавление в список
const register = () => {

    listData.textContent = '';
   

    listData.forEach((item) => {
        let li = document.createElement('li');
        li.classList.add('list-item');
        
        li.innerHTML += '<span>' + 'Имя:' + 
        item.name + ', фамилия: ' + 
        item.lastName + ', зарегистрирован: ' + 
        item.regDate + '</span>' + '  ' +
        '<a href="#" class="btn btn-delete" id="delete-user">' +
         'X' + '</a>';
        
        // Удаление дел
        const deleteUser = li.querySelector('#delete-user');

        deleteUser.addEventListener('click',() => {

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

    const start = () => {

        let promptName = prompt('Введите через пробел Имя и Фамилию пользователя');
      
        if (!registName.test(promptName) || 
            promptName.split(' ').length - 1 > 1 || 
            promptName.split(' ').length - 1 < 1) {

          alert('Ошибка ввода данных!');
          return;
        } 
    
        let loginUser = prompt('Введите логин');
    
        if (loginUser === null) {
          return;
        }
    
        let passUser = prompt('Введите пароль');
    
        const arr = promptName.split(' ');
    
        const date = new Date();
        const toDay = date.toLocaleString('ru', dateRegist);
    
        const newText = {
          userName: arr[0],
          lastName: arr[1], 
          login: loginUser,
          password: passUser,
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
  
    let pasAuto = prompt('Введите пароль');
  
    if (pasAuto === null) {
      return;
    }
  
    let promptLoginValue;
    listData.forEach((item) => { 
      if (item.login === promptLogin && 
        item.password === pasAuto) {
        promptLoginValue = promptLogin;
      } 
      console.log(promptLoginValue);
    });
  
    if (promptLoginValue === undefined) {
      alert('Пользователь не найден');
    } else {
        registeredName.textContent = promptLogin;
    }
  };

  login.addEventListener('click', authorization);

// // К форме todoControl навешиваем событие submit
// registerUser.addEventListener('click', function(e) {
//     e.preventDefault();  // Отмена перезагрузки страницы


//     let promptName = prompt('Введите Имя и Фамилию через пробел!');
//     let userLogin = prompt('Введите логин!');
//     let userPass = prompt('Введите пароль!');
    
//     // Новое дело
//     const newList = {
//         value: userName.value,
//         value: userLogin.value,
//         value: userPass.value,
         
//     };

//     // Проверка на пустоту и добавление в массив
//     if(promptName.trim() !== '') {
//         listData.push(newList);
//     }
    
//     // Кодировка массива в JSON и сохранение в обьекте localStorage
//     localStorage.setItem('item', JSON.stringify(listData));
//     promptName.value = '';
     
//     register();
 
// });

register();