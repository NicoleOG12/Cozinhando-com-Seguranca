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
    const imageElement = document.getElementById('result-image');

    if (resultElement && imageElement) {
       


        if (score === 0) {
            imageElement.src = '../../../imagens/zero estrelas.png';
        } else if (score >= 1 && score <= 3) {
            imageElement.src = '../../../imagens/uma estrela.png'; 
        } else if (score >= 4 && score <= 5) {
            imageElement.src = '../../../imagens/duas estrelas.png'; 
        } else if (score >= 6 && score <= 7) {
            imageElement.src = '../../../imagens/três estrelas.png'; 
        } else {
            imageElement.src = '';
        }
    } else {
        console.error('Elemento com ID "result" ou "result-image" não encontrado.');
    }
}

document.addEventListener('DOMContentLoaded', calculateScore);
