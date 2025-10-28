function sortear(){
    
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

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
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}