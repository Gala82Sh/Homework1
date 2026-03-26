function reverseText() {
    let userText = prompt('Введите текст, который нужно перевернуть:');
    
    if (userText !== null && userText.trim() !== '') {
        let reversedText = userText.split('').reverse().join('');
        alert(`Перевернутый текст: ${reversedText}`);
    } else {
        alert('Вы не ввели текст или отменили операцию');
    }
}

document.addEventListener('DOMContentLoaded', function() {

    const reverseTextBtn = document.querySelector('[data-game="reverse-text"]');
    
    if (reverseTextBtn) {
        reverseTextBtn.addEventListener('click', function(event) {
            event.preventDefault();
            reverseText();
        });
        console.log('✅ Игра "Переверни текст" активирована');
    } else {
        console.log('❌ Кнопка с data-game="reverse-text" не найдена');
    }
});