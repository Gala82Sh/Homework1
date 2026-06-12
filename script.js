
let a = 10;
alert("Задание 1 (первое значение): " + a);
a = 20;
alert("Задание 1 (второе значение): " + a);


let firstIPhoneYear = 2007;
alert("Задание 2 (год выпуска первого iPhone): " + firstIPhoneYear);


let creatorName = "Брендан Эйх";
alert("Задание 3 (создатель JavaScript): " + creatorName);


let num1 = 10;
let num2 = 2;
alert("Задание 4 (сумма): " + (num1 + num2));
alert("Задание 4 (разность): " + (num1 - num2));
alert("Задание 4 (произведение): " + (num1 * num2));
alert("Задание 4 (частное): " + (num1 / num2));


let result = 2 ** 5;
alert("Задание 5 (2 в 5-й степени): " + result);


let a6 = 9;
let b6 = 2;
alert("Задание 6 (остаток от деления 9 на 2): " + (a6 % b6));


let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert("Задание 7 (результат вычислений): " + num);


let age = prompt("Задание 8: Сколько вам лет?");
alert("Задание 8 (ваш возраст): " + age);


let user = {
  name: "Анна",
  age: 28,
  isAdmin: true
};
alert("Задание 9 (объект user создан). Имя: " + user.name + ", возраст: " + user.age + ", администратор: " + user.isAdmin);


let userName = prompt("Задание 10: Введите ваше имя:");
alert(`Задание 10: Привет, ${userName}!`);


let number = prompt("Дополнительное задание: Загадайте любое число:");
let doubled = number * 2;
alert("Доп. задание (удвоенное число): " + doubled);

let added = doubled + 10;
alert("Доп. задание (удвоенное + 10): " + added);

let divided = added / 2;
alert("Доп. задание (результат / 2): " + divided);

let subtracted = divided - number;
alert("Доп. задание (результат - исходное): " + subtracted);

alert("Доп. задание: Ответ равен 5");