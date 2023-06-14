function verificarSenha() {
  
    // Obtém a senha digitada pelo usuário
    var senha = document.getElementById("senha").value;

    // Define os critérios para uma senha válida
    var tamanhoMinimo = 8;
    var possuiLetraMaiuscula = /[A-Z]/.test(senha);
    var possuiLetraMinuscula = /[a-z]/.test(senha);
    var possuiNumero = /[0-9]/.test(senha);

    // Verifica se a senha atende a todos os critérios
    if (senha.length >= tamanhoMinimo &&
        possuiLetraMaiuscula &&
        possuiLetraMinuscula &&
        possuiNumero) {
      alert("Senha válida!");
    } else {
      alert("Senha inválida!");
    }
  }

  function sugerirSenha() {
    // Sugere uma senha válida para o usuário
    var sugestao = "a senha tem que ter um total de 8 caracteres contendo letras maisculas e minusculas e numeros ";

    // Exibe um alerta com a sugestão
    alert("Sugestão de senha: " + sugestao);
  }