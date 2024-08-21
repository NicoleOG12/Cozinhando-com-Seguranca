
document.addEventListener('DOMContentLoaded', () => {
const dialog = document.querySelector('.dialogo');

    function pularDialogo(event) {
        if(event.key === 'Enter') {
            window.location.href = 'bolo_de_chocolate_2.html';
        }

    }


    document.addEventListener('keydown', pularDialogo);

});


