const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
console.log(people.sort((a, b) => a.age - b.age));



function isPositive(number) {
    return number > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(array, ruleFunction) {
    const resultArray = [];
    
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            resultArray.push(array[i]);
        }
    }
    
    return resultArray;
}


console.log(filter([3, -4, 1, 9], isPositive));


const peopleForFilter = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(peopleForFilter, isMale));




let secondsPassed = 0;
const intervalId = setInterval(() => {
    console.log(new Date());
    secondsPassed += 3;
    
    if (secondsPassed >= 30) {
        clearInterval(intervalId);
        console.log("30 секунд прошло");
    }
}, 3000);





function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond(function() {
    console.log('Привет, Глеб!');
});






function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {
            cb();
        }
    }, 1000);
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => {
    sayHi('Глеб');
});