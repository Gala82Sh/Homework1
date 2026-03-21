function playGame() {
   
    let userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();


    while (userChoice !== "камень" && userChoice !== "ножницы" && userChoice !== "бумага") {
        userChoice = prompt("Некорректный ввод! Пожалуйста, выберите: камень, ножницы или бумага").toLowerCase();
    }
    
   
    const options = ["камень", "ножницы", "бумага"];
    
    
    const randomIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[randomIndex];
    
   
    let result = "";
    
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Победа!";
    } else {
        result = "Поражение!";
    }
    
   
    console.log(`Ваш выбор: ${userChoice}`);
    console.log(`Выбор компьютера: ${computerChoice}`);
    console.log(`Результат: ${result}`);
    
   
    alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`);
}


document.addEventListener("DOMContentLoaded", function() {
  
    const gameButtons = document.querySelectorAll('.game-card__button');
    
  
    const rpsCards = document.querySelectorAll('#game-rock-paper-scissors');
    
    rpsCards.forEach(card => {
        const button = card.querySelector('.game-card__button');
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                playGame();
            });
        }
    });
    
    });
