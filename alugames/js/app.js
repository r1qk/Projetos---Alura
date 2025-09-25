let jogosAlugados = 0;

function exibir() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(numeroJogo) {
    let jogo = document.getElementById('game-' + numeroJogo);
    let imagem = jogo.querySelector('.dashboard__item__img'); 
    let botao = jogo.querySelector('.dashboard__item__button');
    let nomeJogo = jogo.querySelector('.dashboard__item__name');

    if (!imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver'; 
        jogosAlugados++;

        
    } else {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar'; 
            jogosAlugados--;
        }
    }
    exibir();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    exibir();
});


