let str = 'js';
let upperStr = str.toUpperCase();
console.log(upperStr); 




function filterByStart(array, startString) {
    return array.filter(item => 
        item.toLowerCase().startsWith(startString.toLowerCase())
    );
}



let number = 32.58884;
console.log('До меньшего целого:', Math.floor(number));     
console.log('До большего целого:', Math.ceil(number));      
console.log('До ближайшего целого:', Math.round(number));    





const numbers = [52, 53, 49, 77, 21, 32];
console.log('Минимальное значение:', Math.min(...numbers));  
console.log('Максимальное значение:', Math.max(...numbers)); 





function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log('Случайное число от 1 до 10:', getRandomNumber());



function generateRandomArray(n) {
    let length = Math.floor(n / 2);
    let result = [];
    for (let i = 0; i < length; i++) {
        result.push(Math.floor(Math.random() * (n + 1)));
    }
    return result;
}
console.log('Массив случайных чисел:', generateRandomArray(10));




function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('Случайное число от 5 до 15:', getRandomInRange(5, 15));




let currentDate = new Date();
console.log('Текущая дата:', currentDate);




let currentDate2 = new Date();
currentDate2.setDate(currentDate2.getDate() + 73);
console.log('Дата через 73 дня:', currentDate2);





function formatDate(date) {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    
    const days = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ];
    
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let weekDay = days[date.getDay()];
    
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    
    return `Дата: ${day} ${month} ${year} — это ${weekDay}. Время: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));
