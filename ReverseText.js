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
    const reverseTextBtn = document.getElementById('reverse-text-btn');
    if (reverseTextBtn) {
        reverseTextBtn.addEventListener('click', function(event) {
            event.preventDefault();
            reverseText();
        });
    }
});