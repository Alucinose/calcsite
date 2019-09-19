function fazerRequisicao(){
var url='https://swapi.co/api/people/';

var xhttp = new XMLHttpRequest();

xhttp.open("GET", url, false);

xhttp.send();//A execução do script para aqui até a requi

var retorno = JSON.parse(xhttp.responseText)
console.log(xhttp.responseText)

var primeiroNome = retorno.results[1].name;
document.getElementById("nome1").textContent = primeiroNome;

var segundoNome = retorno.results[2].name;
document.getElementById("nome2").textContent = segundoNome;

}
