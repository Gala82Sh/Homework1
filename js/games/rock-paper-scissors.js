const choices = ['камень', 'ножницы', 'бумага'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) return 'Ничья!';
    
    if (
        (player === 'камень' && computer === 'ножницы') ||
        (player === 'ножницы' && computer === 'бумага') ||
        (player === 'бумага' && computer === 'камень')
    ) {
        return 'Вы выиграли!';
    }
    
    return 'Компьютер выиграл!';
}

function playGame() {
    let playerInput = prompt('Выберите: камень, ножницы или бумага');
    
    if (playerInput === null) {
        alert('Игра отменена');
        return;
    }
    
    let playerChoice = playerInput.toLowerCase().trim();
    
    if (!choices.includes(playerChoice)) {
        alert('Ошибка! Пожалуйста, выберите: камень, ножницы или бумага');
        return; 
    }
    
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    
    alert(`Вы выбрали: ${playerChoice}\nКомпьютер выбрал: ${computerChoice}\n\n${result}`);
    
    updateGameUI(playerChoice, computerChoice, result);
}

function updateGameUI(playerChoice, computerChoice, result) {
    const resultElement = document.getElementById('result');
    const playerChoiceElement = document.getElementById('player-choice');
    const computerChoiceElement = document.getElementById('computer-choice');
    
    if (resultElement) resultElement.textContent = result;
    if (playerChoiceElement) playerChoiceElement.textContent = playerChoice;
    if (computerChoiceElement) computerChoiceElement.textContent = computerChoice;
}


document.addEventListener('DOMContentLoaded', () => {
    
    const playButton = document.querySelector('[data-game="rock-paper-scissors"]');
    
    if (playButton) {
        playButton.addEventListener('click', (e) => {
            e.preventDefault(); 
            playGame();
        });
    }
});