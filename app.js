let ListaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagemInicial() {
    exibirTextoNaTela ('h1' , 'Jogo feito por Aubin do número secreto hihihi');
    exibirTextoNaTela ('p' , 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial(); 

exibirTextoNaTela ('h1' , 'Jogo feito por Aubin do número secreto hihihi');
exibirTextoNaTela ('p' , 'Escolha um número entre 1 e 100');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'ACERTOU CARAMBA, muito inteligente');
        let palavraTentativa = tentativas > 1 ? 'TENTATIVAS' : 'TENTATIVA';
        let mensagemTentativas = `PARABENS VOCÊ ACERTOU COM ${tentativas} ${palavraTentativa} JOGUE NOVAMENTE`;
        exibirTextoNaTela('p', mensagemTentativas);     
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'ERROU HAHAHA');
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('h1', 'ERROU HAHAHA');
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas ++
        limparCampo();
    }
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = ListaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        ListaDeNumerosSorteados = [];
    }

    if(ListaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        ListaDeNumerosSorteados.push(numeroEscolhido);
        console.log(ListaDeNumerosSorteados);
        return numeroEscolhido;
    }
}   


function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela ('h1' ,'Vai jogar denovo, então você gostou hihihi BOA SORTE');
    exibirTextoNaTela ('p' , 'Escolha um número entre 1 e 100');    
    document.getElementById('reiniciar').setAttribute('disabled',true)
}
