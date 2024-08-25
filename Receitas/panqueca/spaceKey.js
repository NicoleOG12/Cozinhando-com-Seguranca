document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
       
        const pag = ['bolo_de_chocolate_1.html', 'bolo_de_chocolate_2.html', 'bolo_de_chocolate_3.html', 'bolo_de_chocolate_4.html', 'expositor ingredientes.html', 'expositor ingredientes2.html']; 

   
        const pagAtual = window.location.pathname.split('/').pop();

       
        const posicaoAtual = pages.indexOf(pagAtual);

      
        if (currentIndex !== -1) {
           
            const proximaPosicao = (posicaoAtual + 1) % pages.length; 

           
            window.location.href = pag[proximaPosicao];
        } else {
            console.warn('Página atual não encontrada no array de páginas.');
        }
    }
});
