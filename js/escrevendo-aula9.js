//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {

  var nome = prompt("Qual o comando para listar o repositório remoto?");
  if ((nome == "git remote")) {
    alert("O " + nome + ", serve para listar o repositório remoto.Parabéns você acertou!");
  } else {
    if (window.confirm("Infelizmente você não acertou... Acesse:\n'https://www.w3schools.com/git/git_remote_getstarted.asp?remote=github'\n e tente mais tarde.\nClique em OK para acessar o link:")) {
      window.open('https://www.w3schools.com/git/git_remote_getstarted.asp?remote=github', '_blank');
      if (window.confirm("O jogo chegou ao fim!!!")) {
        window.location = "index.html";
      
    };
    };
    //alert("Infelizmente você não acertou... Acesse:'https://www.w3schools.com/git/git_remote_getstarted.asp?remote=github' e tente mais tarde.");
  }
  
};
