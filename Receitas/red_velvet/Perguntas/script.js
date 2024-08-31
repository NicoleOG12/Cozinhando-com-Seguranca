document.querySelectorAll('.opcao').forEach(opcao => {
    opcao.addEventListener('click', function() {
        document.querySelectorAll('.opcao').forEach(op => op.classList.remove('selected'));
        this.classList.add('selected');
   
        const questionNumber = document.querySelector('.pergunta .enunciado').innerText.split(' ')[1];
        const questionValue = this.getAttribute('data-value');
        localStorage.setItem(`answer${questionNumber}`, questionValue);
        const page = this.getAttribute('data-page');
        setTimeout(() => window.location.href = page, 200);
    });
});
