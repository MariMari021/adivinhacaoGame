let numeroGerado

let chances = 5;
else {
    // AS CHANCES DO USUÁRIO DIMINUEM
    chances--;
    // SE CHANCES FOR IGUAL A ZERO (CHANCES ESGOTADAS)
    if (chances === 0) {
        // MOSTRA O TEXTO "FIM DO QUIZ"
        questionContainer.textContent = "Fim do Jogo";
        // EXIBE A PONTUAÇÃO NA ÁREA DETERMINADA (OPÇÕES)
        optionsContainer.innerHTML = <p>Sua pontuação: ${score}</p>;
    // CASO CONTRÁRIO, EXIBE A MENSAGEM "RESPOSTA INCORRETA. TENTE NOVAMENTE", NA ÁREA DE FEEDBACK
    } else {
        feedbackContainer.textContent = "Resposta incorreta. Tente novamente.";
    }
}