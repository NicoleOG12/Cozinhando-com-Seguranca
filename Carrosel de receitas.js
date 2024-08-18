let currentSlide = 0;
const slides = document.querySelectorAll('.carrossel-item'); 

function showSlide(index) {
    slides[currentSlide].classList.remove('ativo'); 
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('ativo'); 
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

showSlide(currentSlide);
