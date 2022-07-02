//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");
var cont = 0;

button.onclick = function () {

  var nome = prompt("Qual o comando para inicializar o Git na pasta atual?");
  
  if ((nome == "git init")) {
    alert("O " + nome + ", serve para iniciar o git. Parabéns você acertou!");
    cont++;
  }else{
    if (window.confirm("Infelizmente você não acertou... Acesse:\n'https://www.w3schools.com/git/git_getstarted.asp?remote=github' \ne tente mais tarde.\nClique em OK para acessar o link:")) {
      window.open('https://www.w3schools.com/git/git_getstarted.asp?remote=github', '_blank');
    };
    //alert("Infelizmente você não acertou... Acesse:'https://www.w3schools.com/git/git_getstarted.asp?remote=github' e tente mais tarde.");

  }
  window.location="aula2.html";
};
