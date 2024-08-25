document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
       
        const pag = ['cookies_1.html', 'cookies_2.html', 'cookies_3.html', 'cookies_4.html', 'cookies_5_1.html', './perguntas/Pergunta1Cookie.html', '', '', '', '', '', '']; 


        const pagAtual = window.location.pathname.split('/').pop();

       
        const posicaoAtual = pag.indexOf(pagAtual);

      
        if (posicaoAtual !== -1) {
           
            const proximaPosicao = (posicaoAtual + 1) % pag.length; 

           
            window.location.href = pag[proximaPosicao];
        } else {
            console.warn('Página atual não encontrada no array de páginas.');
        }
    }
});
