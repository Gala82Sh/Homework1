const array1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
    if (array1[i] === 10) {
        break;
    }
}



const array2 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < array2.length; i++) {
    if (array2[i] === 4) {
        console.log(i);
    }
}



const array3 = [1, 3, 5, 10, 20];
console.log(array3.join(' '));



const newArray = [];
for (let i = 0; i < 3; i++) {
    const smallArray = [];
    for (let j = 0; j < 3; j++) {
        smallArray.push(1);
    }
    newArray.push(smallArray);
}
console.log(newArray);



const array5 = [1, 1, 1];
array5.push(2, 2, 2);
console.log(array5);



const array6 = [9, 8, 7, 'a', 6, 5];
array6.sort();
const newArray6 = [];
for (let i = 0; i < array6.length; i++) {
    if (array6[i] !== 'a') {
        newArray6.push(array6[i]);
    }
}
console.log(newArray6);



const array7 = [9, 8, 7, 6, 5];
const userNumber = prompt('Угадайте число от 1 до 9');
if (userNumber !== null) {
    let number = Number(userNumber);
    if (array7.includes(number)) {
        alert('Угадал');
    } else {
        alert('Не угадал');
    }
} else {
    alert('Игра отменена');
}



const string8 = 'abcdef';
const arrayFromString = string8.split('');
arrayFromString.reverse();
const newString = arrayFromString.join('');
console.log(newString);



const array9 = [[1, 2, 3], [4, 5, 6]];
const newArray9 = array9[0].concat(array9[1]);
console.log(newArray9);



const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array10.length - 1; i++) {
    let sum = array10[i] + array10[i + 1];
    console.log(sum);
}



function getSquares(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] * array[i]);
    }
    return result;
}
const numbers11 = [1, 2, 3, 4, 5];
console.log(getSquares(numbers11));



function getWordLengths(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i].length);
    }
    return result;
}
const words12 = ['apple', 'banana', 'cherry'];
console.log(getWordLengths(words12));



function getNegativeNumbers(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            result.push(array[i]);
        }
    }
    return result;
}
const numbers13 = [1, -2, 3, -4, 5, -6];
console.log(getNegativeNumbers(numbers13));



const randomNumbers14 = [];
for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 11);
    randomNumbers14.push(randomNumber);
}

const evenNumbers14 = [];
for (let i = 0; i < randomNumbers14.length; i++) {
    if (randomNumbers14[i] % 2 === 0) {
        evenNumbers14.push(randomNumbers14[i]);
    }
}

console.log('Исходный массив:', randomNumbers14);
console.log('Четные числа:', evenNumbers14);



const randomNumbers15 = [];
for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    randomNumbers15.push(randomNumber);
}

let sum15 = 0;
for (let i = 0; i < randomNumbers15.length; i++) {
    sum15 = sum15 + randomNumbers15[i];
}

let average = sum15 / randomNumbers15.length;
console.log(average);