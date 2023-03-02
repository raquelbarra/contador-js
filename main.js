// Desenvolvido por Raquel Barra - 01/03/2023 - projeto de estudo

let divContador = document.querySelector('.contador');
let divNumero = document.querySelector('.numero');
let numero = Number(divNumero.innerHTML);
let botaoDecremento = document.querySelector('.decremento');
let botaoZero = document.querySelector('.zero');
let botaoIncremento = document.querySelector('.incremento');

// Ações na página
click(botaoDecremento, ()=>{
    let numeroZero = numero == 0;
    if(numeroZero){
        alert('Não é possível decrementar!');
    }
    else {
        atualizarNumero('decremento',numero);
        verificarNumeroEEstilizarContador(numero);
        configurarBotao('decremento',numero);
    }
})

click(botaoIncremento, ()=>{
    if(numero == 100){
        alert('Não é possível incrementar');
    }
    else if(numero < 100){
        atualizarNumero('incremento',numero);
        verificarNumeroEEstilizarContador(numero);
        configurarBotao('incremento',numero);
    }
})

click(botaoZero, ()=>{
    estilizarContador('zero');
    atualizarNumero('zero',numero);
    configurarBotao('zero',numero);
})


// Processamento de informações

function atualizarNumero(tipo,numeroAtual){
    
    if(tipo == 'zero'){
        numero = 0;
    } else if (tipo == 'decremento') {
        numero = numeroAtual - 1;
    } else if (tipo == 'incremento') {
        numero = numeroAtual + 1;
    }

    divNumero.innerHTML = numero;
}

function verificarNumeroEEstilizarContador(numeroAtual) {
    if(numeroAtual == 0) {
        estilizarContador('zero');
    } else if(numeroAtual % 2 == 0){
        estilizarContador('par');
    } else {
        estilizarContador('impar');
    }
}

function configurarBotao(botao,numero){

    let validacaoNumeroZeroBtnDecrementoOuZero = numero == 0 && (botao == 'decremento' || botao == 'zero');
    let validacaoNumero99BtnDecremento = numero == 99 && botao == 'decremento';
    let validacaoNumero1BtnIncremento = numero == 1 && botao == 'incremento';
    let validacaoNumero100BtnIncremento = numero == 100 && botao == 'incremento';

    if(validacaoNumeroZeroBtnDecrementoOuZero){
        botaoDecremento.disabled = true;
        botaoIncremento.disabled = false;
    } else if (validacaoNumero99BtnDecremento) {
        botaoIncremento.disabled = false;
    } else if(validacaoNumero1BtnIncremento) {
        botaoDecremento.disabled = false;
    } else if(validacaoNumero100BtnIncremento){
        botaoIncremento.disabled = true;
    }
}

function estilizarContador(numeroAtual){

    if(numeroAtual == 'par'){
        divContador.classList.remove('bg-azul');
        divNumero.classList.remove('txt-azul');
        divContador.classList.remove('bg-vermelho');
        divNumero.classList.remove('txt-vermelho');
        divContador.classList.add('bg-verde');
        divNumero.classList.add('txt-verde');
    } else if(numeroAtual == 'impar') {
        divContador.classList.remove('bg-azul');
        divNumero.classList.remove('txt-azul');
        divContador.classList.remove('bg-verde');
        divNumero.classList.remove('txt-verde');
        divContador.classList.add('bg-vermelho');
        divNumero.classList.add('txt-vermelho');
    } else if (numeroAtual == 'zero') {
        divContador.classList.remove('bg-verde');
        divNumero.classList.remove('txt-verde');
        divContador.classList.remove('bg-vermelho');
        divNumero.classList.remove('txt-vermelho');
        divContador.classList.add('bg-azul');
        divNumero.classList.add('txt-azul');
    }

}

// Função auxiliar

function click(ele, callback){
    ele.addEventListener('click', function (e) {
        e.preventDefault();
        callback();
    })
}
