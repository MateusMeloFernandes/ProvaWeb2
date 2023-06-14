function verificarQuadradoPerfeito() {
    // Obtém o valor do input
    var input = document.getElementById("numero").value;
    var numero = parseInt(input);

    // Verifica se o número é um quadrado perfeito
    var squareRoot = Math.sqrt(numero);
    if (squareRoot === Math.floor(squareRoot)) {
      document.getElementById("resultado").innerHTML = numero + " é um quadrado perfeito.";
    } else {
      document.getElementById("resultado").innerHTML = numero + " não é um quadrado perfeito.";
    }
  }