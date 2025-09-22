function gerarNumeroAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.add('container__botao');
        botao.classList.remove('container__botao-desabilitado');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let inicio = parseInt(document.getElementById('de').value);
    let final = parseInt(document.getElementById('ate').value);

    if (inicio > final) { //garantindo que o começo é menor que o final
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';

        alert('O número final deve ser maior que o inicial');
        let resultado_negado = document.getElementById('resultado');
        resultado_negado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    } else {

        let lista = [];
        let numeroSorteado;

        if (quantidade > (final - inicio + 1)) { //garantindo a cabe x termos na lista
            alert('Impossível, a quantidade é maior que o limite');
        } else{
            for (let i = 0; i < quantidade; i++) {
                numeroSorteado = parseInt(gerarNumeroAleatorio(final, inicio));
        
                while (lista.includes(numeroSorteado)) {
                    numeroSorteado = parseInt(gerarNumeroAleatorio(final, inicio));
                }
        
                lista.push(numeroSorteado);
                
            }
        
            let resultado = document.getElementById('resultado'); //não por .value pq é processo contrário
            resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${lista}</label>`;
            alterarStatusBotao();
        }
    
    }
}


function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    alterarStatusBotao();
}