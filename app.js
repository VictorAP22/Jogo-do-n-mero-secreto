//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número de 1 a 10';
let listaNumerosSorteados = [];
let numeroLimite = 10;
let numerosecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

exibirMensagemInicial();


function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numerosecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(chute > numerosecreto){
        exibirTextoNaTela('p',`O número secreto é menor que ${chute}`);
    } else{
        exibirTextoNaTela('p',`O número secreto é maior que ${chute}`);
        
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

   let elementosLista = listaNumerosSorteados.length;
        if(elementosLista == numeroLimite){
            listaNumerosSorteados = [];
        }

   if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   }else{
    listaNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}
function reiniciarJogo(){
    numerosecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}