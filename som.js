window.addEventListener('load', function() {
    var audio = document.getElementById('background-audio');

    // Tenta reproduzir o áudio
    var play = audio.play();

    if (play !== undefined) {
        play.then(function() {
            console.log("Áudio reproduzido automaticamente.");
        }).catch(function(error) {
            console.log("A reprodução automática falhou.");
        });
    }
});
