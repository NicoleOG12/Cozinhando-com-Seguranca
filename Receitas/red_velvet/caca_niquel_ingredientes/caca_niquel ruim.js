const slotImage = document.getElementById('slotImage');
const lever = document.getElementById('lever');
const nextQuestionLink = document.getElementById('next-question');

const allImages = [
    '../../../imagens/água.png',
    '../../../imagens/cebola.png',
    '../../../imagens/pão.png',
    '../../../imagens/brocolis.png',
    '../../../imagens/pimenta.png',
    '../../../imagens/pepino.png',
    '../../../imagens/alho.png',
];

let images = [...allImages];
let usedImages = JSON.parse(sessionStorage.getItem('usedImages')) || [];

function initializeGame() {

    if (usedImages.length === allImages.length) {
        alert('Todos os ingredientes já foram exibidos! Reiniciando...');
        usedImages = [];
        images = [...allImages];
        sessionStorage.removeItem('usedImages');
    } else {
        images = images.filter(image => !usedImages.includes(image));
    }
}

function startGame() {
    initializeGame();

    if (images.length === 0) {
        images = [...allImages];
    }

    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images.splice(randomIndex, 1)[0];
    slotImage.src = selectedImage;
    usedImages.push(selectedImage);

    sessionStorage.setItem('usedImages', JSON.stringify([...new Set(usedImages)]));
    sessionStorage.setItem('selectedImage', selectedImage);

    lever.removeEventListener('click', startGame);
    lever.style.cursor = 'not-allowed';
    lever.style.opacity = '0.5';
    updateNavigation();
}

function updateNavigation() {
    const currentRound = parseInt(sessionStorage.getItem('currentRound')) || 1;

    let nextPage = '../Perguntas/Pergunta1.html';

    if (currentRound === 1) {
        nextPage = '../Perguntas/Pergunta2.html';
        sessionStorage.setItem('currentRound', '2');
    } else if (currentRound === 2) {
        nextPage = '../Perguntas/Pergunta3.html';
        sessionStorage.setItem('currentRound', '3');
    } else if (currentRound === 3) {
        nextPage = '../Perguntas/Pergunta4.html';
        sessionStorage.setItem('currentRound', '4');
    } else if (currentRound === 4) {
        nextPage = '../Perguntas/Pergunta5.html';
        sessionStorage.setItem('currentRound', '5');
    } else if (currentRound === 5) {
        nextPage = '../Perguntas/Pergunta6.html';
        sessionStorage.setItem('currentRound', '6');
    } else if (currentRound === 6) {
        nextPage = '../Perguntas/Pergunta7.html';
        sessionStorage.setItem('currentRound', '7');
    } else if (currentRound === 7) {
        nextPage = './lista_ingredientes.html';
        sessionStorage.removeItem('currentRound');
    }

    nextQuestionLink.href = nextPage;
}

lever.addEventListener('click', startGame);
