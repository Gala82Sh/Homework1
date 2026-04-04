function startQuiz() {
    let score = 0;
    
    
    let answer1 = prompt('Столица Франции?\n1. Париж\n2. Лондон\n3. Берлин');
    if (answer1 && answer1.toLowerCase() === 'париж') {
        score++;
        alert('Правильно! +1 балл');
    } else if (answer1 !== null) {
        alert('Неправильно! Правильный ответ: Париж');
    }
    
   
    let answer2 = prompt('Сколько дней в неделе?\n1. 5\n2. 6\n3. 7');
    if (answer2 === '7') {
        score++;
        alert('Правильно! +1 балл');
    } else if (answer2 !== null) {
        alert('Неправильно! Правильный ответ: 7');
    }
    
   
    let answer3 = prompt('Какого цвета трава?\n1. Синий\n2. Зеленый\n3. Красный');
    if (answer3 && answer3.toLowerCase() === 'зеленый') {
        score++;
        alert('Правильно! +1 балл');
    } else if (answer3 !== null) {
        alert('Неправильно! Правильный ответ: Зеленый');
    }
    
  
    alert(`Викторина окончена!\nВаш результат: ${score} из 3`);
}

document.addEventListener('DOMContentLoaded', function() {

    let quizBtn = document.getElementById('quiz-btn');
    
    if (!quizBtn) {
        quizBtn = document.querySelector('[data-game="quiz"]');
    }
    

    if (!quizBtn) {
        const article = document.getElementById('game-quiz');
        if (article) {
            quizBtn = article.querySelector('.game-card__button');
        }
    }
    
    if (quizBtn) {
        quizBtn.addEventListener('click', function(event) {
            event.preventDefault();
            startQuiz();
        });
        console.log('✅ Игра "Простая викторина" активирована');
    } else {
        console.error('❌ Кнопка викторины не найдена');
    }
});