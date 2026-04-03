let cliques = 0;

const botao = document.getElementById("fuga");
const musica = document.getElementById("musica");
const msc = document.getElementById("msc");
const msg = document.getElementById("mensagem");
const audio = document.getElementById("audio");

botao.addEventListener("click", function() {
    cliques++;

    if (cliques === 1) {
        mensagem.textContent = "É melhor";
        musica.play();

        msc.volume = 0.4;
        msc.currentTime = 7;

        msc.play();
    }
    else if (cliques === 2) {
        mensagem.textContent = "você";
    } 
    else if (cliques === 3) {
        mensagem.textContent = "parar";
    } 
    else if (cliques === 4) {
        mensagem.textContent = "com isso";
    }
    else if (cliques === 5) {
        mensagem.textContent = "DESISTA";
    }
    else if (cliques === 6) {
        mensagem.textContent = "!@#$%¨&*()_+=-[]";
    } 
    else if (cliques === 10) {
        mensagem.textContent = "!@#$%¨&*()_+=-[]";
        musica.pause();


        audio.play();
    }

});

