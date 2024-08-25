let currentSlide = 0;
const slides = document.querySelectorAll('.carrossel-item');
const imagemSlide = document.getElementById('imagem-slide');

// Array com os caminhos das imagens correspondentes a cada slide
const imagens = [
    './imagens/farinha.png',
    './imagens/nicoleChibiFundoRosa.png',
];

function showSlide(index) {
    slides[currentSlide].classList.remove('ativo'); 
    imagemSlide.classList.remove('ativo');  // Inicia o fade out da imagem atual

    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('ativo');

    // Trocar a imagem da receita após o fade out
    setTimeout(() => {
        imagemSlide.src = imagens[currentSlide];
        imagemSlide.classList.add('ativo');  // Inicia o fade in da nova imagem
    }, 500);  // Ajuste o tempo para coincidir com a duração da transição (0.5s)
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowRight') {
        nextSlide();
    } else if (event.key === 'ArrowLeft') {
        prevSlide();
    } 
});

showSlide(currentSlide);  // Mostrar o slide inicial
