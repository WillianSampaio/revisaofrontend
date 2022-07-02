//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {

  var nome = prompt("Qual o comando para listar os recursos da pasta?");
  if ((nome == "ls")) {
    alert("O " + nome + ", serve para listar os recursos da pasta.Parabéns você acertou!");
  }else{
    if (window.confirm("Infelizmente você não acertou... Acesse:\n'https://www.w3schools.com/git/git_new_files.asp?remote=github' e tente mais tarde.\nClique em OK para acessar o link:")) {
      window.open('https://www.w3schools.com/git/git_new_files.asp?remote=github', '_blank');
    };
    //alert("Infelizmente você não acertou... Acesse:'https://www.w3schools.com/git/git_new_files.asp?remote=github' e tente mais tarde.");
  }
  window.location="aula10.html";
};
