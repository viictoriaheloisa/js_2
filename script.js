alert("Bem-vindo à página do Justin Bieber!");

var idade = 30;
let nome = "Justin Bieber";
const nacionalidade = "Canadense";

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Nacionalidade:", nacionalidade);

function mostrarMensagem() {
  alert("Obrigado por visitar o site, fã de " + nome + "!");
}

setTimeout(mostrarMensagem, 5000);