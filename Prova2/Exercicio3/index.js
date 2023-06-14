// Função para calcular o fatorial de um número
function calcularFatorial() {
    
    // Obtém o número selecionado pelo usuário
    var numero = parseInt(document.getElementById("numero").value);

    // Verifica se o número é válido (entre 1 e 10)
    if (numero < 1 || numero > 10) {
        alert("Por favor, selecione um número entre 1 e 10.");
        return;
    }

    // Inicializa o fatorial como 1
    var fatorial = 1;

    // Calcula o fatorial
    for (var i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    // Exibe o resultado do fatorial
    alert("O fatorial de " + numero + " é: " + fatorial);
}