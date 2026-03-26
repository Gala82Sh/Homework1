function guessNumber() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    
    while (true) {
        const input = prompt('Угадай число от 1 до 100:');
        
        if (input === null) {
            alert('Игра завершена');
            return;
        }
        
        const guess = Number(input);
        
        if (isNaN(guess) || input.trim() === '') {
            alert('Введите число!');
            continue;
        }
        
        if (guess < 1 || guess > 100) {
            alert('Число должно быть от 1 до 100!');
            continue;
        }
        
        attempts++;
        
        if (guess === secretNumber) {
            alert(`Поздравляю! Ты угадал число ${secretNumber} за ${attempts} попыток!`);
            
            if (confirm('Сыграем еще?')) {
                guessNumber();
            }
            return;
        } else if (guess < secretNumber) {
            alert(`Загаданное число больше ${guess}`);
        } else {
            alert(`Загаданное число меньше ${guess}`);
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const gameButton = document.querySelector('#game-guess-number .game-card__button');
    if (gameButton) {
        gameButton.addEventListener('click', function(e) {
            e.preventDefault();
            guessNumber();
        });
    }
    
    const startButton = document.querySelector('.btn');
    if (startButton) {
        startButton.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('game-guess-number').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
});