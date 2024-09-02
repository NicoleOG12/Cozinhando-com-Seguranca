document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menuprincipalbotao1');
    const bolo = document.querySelector('.bolo');
    let posicaoAtual = 0;

    const som = document.getElementById('efeito');
    const som2 = document.getElementById('efeito-enter');
    const whiteBg = document.getElementById('white-background');

   
    som.addEventListener('canplaythrough', () => {
        console.log('O som foi carregado e está pronto para ser reproduzido.');
    });

    function atualizarPosicaoBolo() {
        const itemSelecionado = menuItems[posicaoAtual];
        bolo.style.top = itemSelecionado.offsetTop + 'px';
    }

    function navegarMenu(event) {
        if (event.key === 'ArrowDown') {
            posicaoAtual = (posicaoAtual + 1) % menuItems.length;
            atualizarPosicaoBolo();
            som.play();
        } else if (event.key === 'ArrowUp') {
            posicaoAtual = (posicaoAtual - 1 + menuItems.length) % menuItems.length;
            atualizarPosicaoBolo();
            som.play();
        } else if (event.key === 'Enter') {
            som2.play();
            const opcaoSelecionada = menuItems[posicaoAtual].getAttribute('data-action');
            executarAction(opcaoSelecionada);
        }
    }

    function executarAction(action) {
        if (action) {
          
            whiteBg.classList.add('fade-in');

       
            setTimeout(function() {
             

            
                setTimeout(function() {
                    if (action === 'play') {
                        whiteBg.classList.add('fade-out');
                        window.location.href = 'Menu de Receitas.html';
                    } else if (action === 'cartilha') {
                        whiteBg.classList.add('fade-out');
                        window.location.href = 'cartilha.html';
                    }
                }, 990);
            }, 990); 
        }
    }

    document.addEventListener('keydown', navegarMenu);
    atualizarPosicaoBolo();
});
