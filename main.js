// Declare a variável para armazenar o número gerado.
let numeroGerado;
let chances = 5; // Inicialize as chances aqui
let jogadorNumero; // Declare jogadorNumero aqui para que seja acessível em várias funções

// Função para gerar um número aleatório entre 1 e 100.
function gerarNumero() {
    const min = 1;
    const max = 100;
    numeroGerado = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(numeroGerado);
}

// Função para verificar o número inserido pelo jogador.
function verificarNumero() {
    jogadorNumero = parseInt(document.getElementById("numeroDoJogador").value);

    const resposta = document.getElementById("resposta");

    if (jogadorNumero > numeroGerado) {
        resposta.innerHTML = "Número é menor";
        responder();
    } else if (jogadorNumero < numeroGerado) {
        resposta.innerHTML = "Número é maior";
        responder();
    } else {
        resposta.innerHTML = "Correto!";
    }

    // Chame a função responder após verificar o número
    responder();
}

// Função para verificar se o jogador acertou ou não.
function responder() {
    for (let chances = 5; chances <= 0; chances--) {
        const tentativas = document.getElementById("chances");
        tentativas.innerHTML = "tente de novo";
    }

    // Verifica se o jogador acertou
    // chances=document.getElementById("chances")
    // if (jogadorNumero !== numeroGerado) {
    //     chances--;
    //     if (chances <= 0) {
    //         // Reinicie as chances e gere um novo número
    //         resposta.innerHTML = "FIM DE JOGO";


    //     }
    // }
}

// Neste exemplo, presumo que você tenha um campo de entrada de texto com id "numeroDoJogador" e um elemento com id "resposta" para exibir as respostas.

// Chame a função para gerar o número aleatório.
gerarNumero();



// function numeroGerado(){
//     let min = 1
//     let max = 100
//     let valorGerado = Math.floor(Math.random() * (max - min + 1) + min);

//     console.log(valorGerado);
// }


// function numeroDoJogador (){
//     let jogadorNumero = document.getElementById("numeroDoJogador").innerHTML;
//     if(numeroGerado > jogadorNumero){
//     resposta=document.getElementById("resposta")
//     resposta.innerHTML="Número é maior"
// } if (numeroGerado<jogadorNumero) {
//     resposta=document.getElementById("resposta")
//     resposta.innerHTML="Número é menor"
// } else {
//     resposta.innerHTML="correto"
// }

// }




// let chances = 5;
// else {
//     // AS CHANCES DO USUÁRIO DIMINUEM
//     chances--;
//     // SE CHANCES FOR IGUAL A ZERO (CHANCES ESGOTADAS)
//     if (chances === 0) {
//         // MOSTRA O TEXTO "FIM DO QUIZ"
//         questionContainer.textContent = "Fim do Jogo";
//         // EXIBE A PONTUAÇÃO NA ÁREA DETERMINADA (OPÇÕES)
//         optionsContainer.innerHTML = <p>Sua pontuação: ${score}</p>;
//     // CASO CONTRÁRIO, EXIBE A MENSAGEM "RESPOSTA INCORRETA. TENTE NOVAMENTE", NA ÁREA DE FEEDBACK
//     } else {
//         feedbackContainer.textContent = "Resposta incorreta. Tente novamente.";
//     }
// }