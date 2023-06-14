   // funcao que verifica se o numero é primo ou nao

  function ehPrimo(numero) {
    if (numero <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }

    return true;
  }

    // funcao que quando o button para verificar primo é clicado, usa a funcão ehPrimo
  
  function verificarPrimo() {
    const numero = parseInt(document.getElementById("numeroInput").value);

    if (ehPrimo(numero)) {
      alert(numero + " é um número primo!");
    } else {
      alert(numero + " não é um número primo.");
    }
  }

  // funcao que quando o button listar é clicado, mostra uma lista de todos os numeros primos de 1 a 1000

  function listarPrimos() {
    const primos = [];

    for (let i = 2; i <= 1000; i++) {
      if (ehPrimo(i)) {
        primos.push(i);
      }
    }

    alert("Números primos entre 1 e 1000:\n\n" + primos.join(", "));
  }