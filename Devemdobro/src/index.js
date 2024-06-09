// alert('oi')//

// passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
// passo 1 - dar um jeito de identificar o clique do usuário na seta voltar
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

// passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function (){
    if (cartaoAtual === cartoes.length - 1) return;


// passo 4 - buscar o cartão que está selecionado e esconder
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

// passo 3 - fazer aparecer o proximo cartão da lista, colocando a classe selecionado nele
    
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");

});


// botão voltar //

// passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;

// passo 4 - buscar o cartão selecionado e esconder
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");    

// passo 3 - fazer aparecer o cartão anterior da lista
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");    
});



