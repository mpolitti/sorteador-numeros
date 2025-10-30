function sortear(){
    
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        alert('Informe um valor "De" inferior ao "Até"!');
        return;
    }

    if (quantidade > ate - de + 1) {
        alert('Quantidade de números a serem sorteados é inválida!');
        return;
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        
        //obtém número aleatório
        numero = obterNumeroAleatorio(de,ate);

        //obtém próximo número aleatório enquanto esse já tiver sido sorteado
        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de,ate);
        }

        //adiciona o número aleatório no array
        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Número(s) sorteado(s):  ${sorteados}</label>`;

    alterarStatusBotao();

}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    
    let botaoReiniciar = document.getElementById('btn-reiniciar');

    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }

    let botaoSortear = document.getElementById('btn-sortear');

    if (botaoSortear.classList.contains('container__botao-desabilitado')) {
        botaoSortear.classList.remove('container__botao-desabilitado');
        botaoSortear.classList.add('container__botao');
    } else {
        botaoSortear.classList.remove('container__botao');
        botaoSortear.classList.add('container__botao-desabilitado');
    }    

}

function reiniciar() {
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = ''
    document.getElementById('ate').value = ''
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Número(s) sorteado(s):  nenhum até agora</label>';
    alterarStatusBotao();
}