
    let password = 'пароль';
    let userInput = prompt('Введите пароль'); 
    
    if (userInput === password) {
        alert('Пароль введен верно');
        console.log('Пароль введен верно');
    } else {
        alert('Пароль введен неправильно');
        console.log('Пароль введен неправильно');
    }




    let c = 2; 
    
    if (c > 0 && c < 10) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
    
    
    console.log('Проверка значений:');
    [0, 10, -3, 2].forEach(val => {
        c = val;
        let result = (c > 0 && c < 10) ? 'Верно' : 'Неверно';
        console.log(`c = ${c}: ${result}`);
    });




    let d = 50;
    let e = 150; 
    
    if (d > 100 || e > 100) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
    
    
    console.log('Проверка разных комбинаций:');
    let testCases = [
        { d: 50, e: 150 },
        { d: 200, e: 50 },
        { d: 50, e: 50 },
        { d: 101, e: 102 }
    ];
    
    testCases.forEach((test, index) => {
        let result = (test.d > 100 || test.e > 100) ? 'Верно' : 'Неверно';
        console.log(`Тест ${index + 1}: d=${test.d}, e=${test.e} -> ${result}`);
    });



    let a = '2';
    let b = '3';
    
    
    let result = Number(a) + Number(b); 
    console.log('Результат сложения:', result); 
    alert(result); 




    let monthNumber = 12; 
   
    if (monthNumber < 1 || monthNumber > 12) {
        console.log('Такого месяца не существует');
    } else {
        let season;
       
        switch (monthNumber) {
            case 12:
            case 1:
            case 2:
                season = 'Зима';
                break;
            case 3:
            case 4:
            case 5:
                season = 'Весна';
                break;
            case 6:
            case 7:
            case 8:
                season = 'Лето';
                break;
            case 9:
            case 10:
            case 11:
                season = 'Осень';
                break;
        }
        console.log(`Месяц ${monthNumber}: ${season}`);
    }
    
  
    console.log('Проверка всех месяцев:');
    for (let month = 1; month <= 12; month++) {
        let season;
        switch (month) {
            case 12: case 1: case 2: season = 'Зима'; break;
            case 3: case 4: case 5: season = 'Весна'; break;
            case 6: case 7: case 8: season = 'Лето'; break;
            case 9: case 10: case 11: season = 'Осень'; break;
        }
        console.log(`Месяц ${month}: ${season}`);
    }




    let userNumber = prompt('Пожалуйста, введите любое число'); 
    
   
    if (userNumber === null || userNumber.trim() === '') {
        alert('Ошибка: ввод отменен или пустая строка');
        console.log('Ошибка: ввод отменен или пустая строка');
    } else {
        let num = Number(userNumber);
        
     
        if (isNaN(num)) {
            alert('Ошибка: введите корректное число');
            console.log('Ошибка: введите корректное число');
        } else {
        
            if (num % 2 === 0) {
                alert('Число четное');
                console.log(`${num} - число четное`);
            } else {
                alert('Число нечетное');
                console.log(`${num} - число нечетное`);
            }
        }
    }




    let clientOSTask2 = 0; 
    
    if (clientOSTask2 === 0) {
        console.log('Установите версию приложения для iOS по ссылке');
    } else if (clientOSTask2 === 1) {
        console.log('Установите версию приложения для Android по ссылке');
    } else {
        console.log('Неизвестная операционная система');
    }
    
    
    console.log('Проверка вариантов:');
    [0, 1].forEach(os => {
        if (os === 0) {
            console.log('iOS: Установите версию приложения для iOS по ссылке');
        } else {
            console.log('Android: Установите версию приложения для Android по ссылке');
        }
    });




    let clientOSTask3 = 1; 
    let clientDeviceYear = 2015; 
    
   
    if (clientOSTask3 === 0) {
        
        if (clientDeviceYear < 2015) {
            console.log('Установите облегченную версию приложения для iOS по ссылке');
        } else {
            console.log('Установите версию приложения для iOS по ссылке');
        }
    } else if (clientOSTask3 === 1) {
        
        if (clientDeviceYear < 2015) {
            console.log('Установите облегченную версию приложения для Android по ссылке');
        } else {
            console.log('Установите версию приложения для Android по ссылке');
        }
    } else {
        console.log('Неизвестная операционная система');
    }
    
    
    console.log('Проверка всех комбинаций:');
    const years = [2010, 2015, 2020];
    const osList = ['iOS', 'Android'];
    
    years.forEach(year => {
        osList.forEach((os, index) => {
            if (index === 0) { 
                if (year < 2015) {
                    console.log(`${year} (iOS): Установите облегченную версию приложения для iOS по ссылке`);
                } else {
                    console.log(`${year} (iOS): Установите версию приложения для iOS по ссылке`);
                }
            } else { 
                if (year < 2015) {
                    console.log(`${year} (Android): Установите облегченную версию приложения для Android по ссылке`);
                } else {
                    console.log(`${year} (Android): Установите версию приложения для Android по ссылке`);
                }
            }
        });
    });

