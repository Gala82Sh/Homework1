function getMinNumber(a, b) {
    return a <= b ? a : b;
}


function checkEvenOdd(number) {
    return number % 2 === 0 ? 'Число четное' : 'Число нечетное';
}


function printSquare(number) {
    console.log(number * number);
}

function getSquare(number) {
    return number * number;
}


function checkAge() {
    const age = prompt('Сколько вам лет?');
    
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    }
}


function multiplyNumbers(a, b) {
    if (isNaN(a) || isNaN(b) || typeof a !== 'number' || typeof b !== 'number') {
        return 'Одно или оба значения не являются числом';
    }
    return a * b;
}


function cubeNumber() {
    const input = prompt('Введите число:');
    const num = Number(input);
    
    if (isNaN(num) || input === '') {
        return 'Переданный параметр не является числом';
    }
    
    return `${num} в кубе равняется ${num ** 3}`;
}


const circle1 = {
    radius: 5,
    getArea: function() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea: function() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};