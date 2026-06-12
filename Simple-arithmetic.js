function startArithmeticGame() {
    alert('Добро пожаловать в игру "Простая арифметика"!');

   
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*', '/'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];

    let correctAnswer;
    let taskString;

   
    switch (randomOperator) {
        case '+':
            correctAnswer = num1 + num2;
            taskString = `${num1} + ${num2}`;
            break;
        case '-':
            correctAnswer = num1 - num2;
            taskString = `${num1} - ${num2}`;
            break;
        case '*':
            correctAnswer = num1 * num2;
            taskString = `${num1} * ${num2}`;
            break;
        case '/':
            correctAnswer = num1 / num2;
            correctAnswer = Math.round(correctAnswer * 100) / 100;
            taskString = `${num1} / ${num2} (ответ округлите до 2 знаков, если нужно)`;
            break;
    }

   
    const userAnswer = prompt(`Решите задачу: ${taskString}`);

    if (userAnswer === null) {
        alert('Игра отменена.');
        return;
    }

   
    const parsedUserAnswer = parseFloat(userAnswer.replace(',', '.'));

    if (isNaN(parsedUserAnswer)) {
        alert('Ошибка: Введите число!');
    } else if (parsedUserAnswer === correctAnswer) {
        alert(`Верно! Ответ: ${correctAnswer}`);
    } else {
        alert(`Ошибка! Правильный ответ: ${correctAnswer}`);
    }
}


document.getElementById('game-simple-arithmetic')?.querySelector('.game-card__button')?.addEventListener('click', (e) => {
    e.preventDefault();
    startArithmeticGame();
});


document.querySelector('a[href="#game-simple-arithmetic"]')?.addEventListener('click', () => {
    setTimeout(startArithmeticGame, 100);
});