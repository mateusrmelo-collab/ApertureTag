let cliques = 0;

const botao = document.getElementById("botaoDesistir");
const mensagem = document.getElementById("mensagem");
const musica = document.getElementById("musica");

botao.addEventListener("click", function() {
    cliques++;

    if (cliques === 1) {
        mensagem.textContent = "Você já está desistindo? Que decepção.";
    } 
    else if (cliques === 2) {
        mensagem.textContent = "Nem tentou direito.";
    } 
    else if (cliques === 3) {
        mensagem.textContent = "Isso não vai te salvar.";
    } 
    else if (cliques === 4) {
        mensagem.textContent = "Clique mais uma vez.";
    } 
    else if (cliques === 5) {
        mensagem.textContent = "Você continua falhando.";
    } 
    else if (cliques === 6) {
        mensagem.textContent = "Última chance...";
    } 
    else if (cliques === 7) {
        mensagem.textContent = "Você não pode sair!";
        botao.textContent = "SEM ESCAPATÓRIA";

        musica.volume = 0.1;
        musica.currentTime = 6;
        musica.play();

        document.body.classList.add("modo-troll");
    }
    else if (cliques === 8) {
        musica.pause();
        musica.currentTime = 0;

        mensagem.textContent = "Você não pode sair!";
        botao.textContent = "SEM ESCAPATÓRIA";

        msc.play();

        document.body.classList.add("modo-troll");
    }
    else if (cliques === 9) {
        msc.pause();
        msc.currentTime = 0;

        mensagem.textContent = "Acabou!";
        botao.textContent = "JÁ CHEGA";

        chiado.play();

        document.body.classList.add("modo-troll");
    }
});