for (let i = 0; i < 2; i++) {
    console.log("Привет");
}



for (let i = 1; i <= 5; i++) {
    console.log(i);
}



for (let i = 7; i <= 22; i++) {
    console.log(i);
}



const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};
for (let name in obj) {
    console.log(`${name} — зарплата ${obj[name]} долларов`);
}



let n = 1000;
let num = 0;
while (n >= 50) {
    n = n / 2;
    num++;
    console.log(`Итерация ${num}: ${n}`);
}
console.log(`Результат: ${n}, количество итераций: ${num}`);




const firstFriday = 5; 
console.log(`Первая пятница месяца - ${firstFriday} число`);
for (let date = firstFriday; date <= 31; date += 7) {
    console.log(`Сегодня пятница, ${date}-е число. Необходимо подготовить отчет.`);
}





let k = 100;
let iterations = 0;
while (k >= 0) {
    console.log(`Итерация ${iterations}: ${k}`);
    k = k - 7;
    iterations++;
}
console.log(`Результат: ${k}, количество итераций: ${iterations}`);




const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

for (let i = 0; i < months.length; i++) {
    console.log(`Месяц №${i + 1}: ${months[i]}`);
}



const book = {
    название: "Война и мир",
    автор: "Лев Толстой",
    год_издания: 1869,
    жанр: "Роман-эпопея"
};

for (let property in book) {
    console.log(`${property}: ${book[property]}`);
}




const randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Массив случайных чисел:", randomNumbers);

let minNumber = randomNumbers[0];
for (let i = 1; i < randomNumbers.length; i++) {
    if (randomNumbers[i] < minNumber) {
        minNumber = randomNumbers[i];
    }
}
console.log("Минимальное число в массиве:", minNumber);
