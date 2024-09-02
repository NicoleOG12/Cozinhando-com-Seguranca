let currentSlide = 0;
const slides = document.querySelectorAll('.carrossel-item'); 
const som2 = document.getElementById('efeito');


function showSlide(index) {
    slides[currentSlide].classList.remove('ativo'); 
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('ativo'); 
}


function nextSlide() {
    showSlide(currentSlide + 1);
    som2.play();
}

function prevSlide() {
    showSlide(currentSlide - 1);
    som2.play();
}

document.addEventListener('keydown', function(event){
        if(event.key === 'ArrowRight') {
            nextSlide();
            som2.play()
           
        } else if (event.key === 'ArrowLeft') {
            prevSlide();
            som2.play()
        } 
    
    });

showSlide(currentSlide);