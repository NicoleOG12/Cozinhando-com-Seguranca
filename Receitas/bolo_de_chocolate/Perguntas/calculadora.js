function calculateScore() {
    const correctAnswers = {
        1: "1", 
        2: "1",
        3: "1", 
        4: "1", 
        5: "1", 
        6: "1", 
        7: "1", 
    };

    let score = 0;

    for (let questionNumber in correctAnswers) {
        const userAnswer = localStorage.getItem(`answer${questionNumber}`);
        if (userAnswer === correctAnswers[questionNumber]) {
            score += 1;
        }
    }

    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerText = `Sua pontuação é ${score}`;
    } else {
        console.error('Elemento com ID "result" não encontrado.');
    }
}

document.addEventListener('DOMContentLoaded', calculateScore);
