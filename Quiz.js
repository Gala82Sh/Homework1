function startQuiz() {
    const quiz = [
        {
            question: "Какой цвет у неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    
    let correctCount = 0;
    
    for (let i = 0; i < quiz.length; i++) {
        let question = quiz[i];
        let questionText = `Вопрос ${i + 1}: ${question.question}\n`;
        
        for (let j = 0; j < question.options.length; j++) {
            questionText += question.options[j] + '\n';
        }
        questionText += 'Введите номер правильного ответа (1, 2 или 3):';
        
        let userAnswer = prompt(questionText);
        
        if (userAnswer !== null) {
            if (parseInt(userAnswer) === question.correctAnswer) {
                correctCount++;
                alert('Правильно! ✓');
            } else {
                alert(`Неправильно ✗. Правильный ответ: ${question.correctAnswer}`);
            }
        } else {
            alert('Игра прервана');
            return;
        }
    }
    
    alert(`Викторина завершена!\nПравильных ответов: ${correctCount} из ${quiz.length}`);
}


document.addEventListener('DOMContentLoaded', function() {
    const quizBtn = document.getElementById('quiz-btn');
    if (quizBtn) {
        quizBtn.addEventListener('click', function(event) {
            event.preventDefault();
            startQuiz();
        });
    }
});
