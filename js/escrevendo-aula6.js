//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {

  var nome = prompt("Qual o comando para clonar um repositorio do github para o git?");
  if ((nome == "git clone")) {
    alert("O " + nome + ", serve para clonar um repositório.Parabéns você acertou!");
  }else{
    if (window.confirm("Infelizmente você não acertou... Acesse:\n'https://www.w3schools.com/git/git_clone.asp?remote=github' \ne tente mais tarde.\nClique em OK para acessar o link:")) {
      window.open('https://www.w3schools.com/git/git_clone.asp?remote=github', '_blank');
    };
    //alert("Infelizmente você não acertou... Acesse:'https://www.w3schools.com/git/git_clone.asp?remote=github' e tente mais tarde.");
  }
  window.location="aula8.html";
};
