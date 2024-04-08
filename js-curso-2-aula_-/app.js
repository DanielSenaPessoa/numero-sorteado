//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do numero secreto';
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML ='escolha um numero dentro de 1 e 10';
let listaDeNumerosSorteados = [];
let numerolimite = 10;
let numeroSecreto = gerarNumeroAleatorio
let tentativas = 1;

function exibirTextoNaTela(tag,texto){

    let campo = document.querySelector(tag);

    campo.innerHTML = texto;

}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p','escolha um numero dentro de 1 e 10');
    responsiveVoice.speak(texto,'Brazilian Portuguese Femele',{rate:1.2})
    
}
exibirMensagemInicial();



function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas':'tentativa';
        let mensagemTentativas = `você descobriu o numero secreto com   ${} ${} `;
        exibirTextoNaTela('p',mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(chute > numeroSecreto)
        exibirTextoNaTela('p','O numero é menor');
        else{
            exibirTextoNaTela('p','o numero é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido =  parseInt(math.random()* numerolimite+1);
   let quantidadeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeElementosNaLista = numerolimite){
        listaDeNumerosSorteados = [];
    }

   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   }
   else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
   }
    
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio;
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p','escolha um numero dentro de 1 e 10');
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}