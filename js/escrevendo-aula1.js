//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {

  var nome = prompt("Qual é o comando para verificar a versão do Git (se houver)?");
  if ((nome == "git --version")) {
    alert("O " + nome + ", serve para verificar qual versão do Git. Parabéns você acertou!");
  }else{
    if (window.confirm("Infelizmente você não acertou... Acesse:\n'https://www.w3schools.com/git/default.asp?remote=github#gsc.tab=0' \ne tente mais tarde.\nClique em OK para acessar o link:")) {
      window.open('https://www.w3schools.com/git/default.asp?remote=github#gsc.tab=0', '_blank');
    };
    //alert("Infelizmente você não acertou... Acesse:'https://www.w3schools.com/git/default.asp?remote=github#gsc.tab=0' e tente mais tarde.");
  }
  window.location="aula3.html";
};
