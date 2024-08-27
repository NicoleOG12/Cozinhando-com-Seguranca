function disabled(card) {
    document.querySelectorAll('.opcao').forEach(opcao => {
        if (opcao !== card) {
            opcao.classList.add('disabled');
        }
    });
}
    
