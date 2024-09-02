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

showSlide(currentSlide);