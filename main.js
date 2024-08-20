

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menuprincipalbotao1');
    const bolo = document.querySelector('.bolo');
    let posicaoAtual = 0;

    function atualizarPosicaoBolo(){
        const itemSelecionado = menuItems[posicaoAtual];
        bolo.style.top = itemSelecionado.offsetTop + 'px';
    }

    function navegarMenu(event) {
        if(event.key === 'ArrowDown') {
            posicaoAtual = (posicaoAtual + 1) % menuItems.length;
            atualizarPosicaoBolo();
        } else if (event.key === 'ArrowUp') {
            posicaoAtual = (posicaoAtual - 1 + menuItems.length) % menuItems.length;
            atualizarPosicaoBolo();
        } else if (event.key === 'Enter'){
            const opcaoSelecionada = menuItems[posicaoAtual].getAttribute('data-action'); executarAction(opcaoSelecionada);
        }
    }

    function executarAction(action) {
        if(action === 'play') {
            window.location.href = 'Menu de Receitas.html';

        } else if (action == 'sobre') {
            window.location.href = 'sobre.html';

        } else if (action == 'cartilha') {
            window.location.href = 'Cartilha de Segurança para Internet.html';

        } else if (action == 'conceptArt') {
            window.location.href = 'conceptart.html';
        }

    }

    document.addEventListener('keydown', navegarMenu);
    atualizarPosicaoBolo();
});