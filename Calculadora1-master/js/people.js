function fazerRequisicao(){
var url='https://swapi.co/api/people/'; //Dei a url onde nós vamos acessar

var xhttp = new XMLHttpRequest(); //A biblioteca onde está os arquivos

xhttp.open("GET", url, false); //Dei o comando para ele pegar o arquivo do url

xhttp.send();//A execução do script para aqui até a requisição retornar do servidor

var retorno = JSON.parse(xhttp.responseText) //
console.log(xhttp.responseText)

//var primeiroNome = retorno.results[0].name;
//document.getElementById("nome1").textContent = primeiroNome;

//var segundoNome = retorno.results[1].name;
//document.getElementById("nome2").textContent = segundoNome;

var html = "";

for(var i=0; i < retorno.results.length; i++  ){
   var nome = retorno.results[i].name;
   html = html + "<a href='#' onclick=Dados('"+url+"')>" + nome + "</a> <br>";
    }

    document.getElementById("usuarios").innerHTML = html; 
}

function Dados(url){
   
    
    var xhttp = new XMLHttpRequest(); 
    
    xhttp.open("GET", url, false);
    
    xhttp.send();
    
    var retorno = JSON.parse(xhttp.responseText) 
    console.log(xhttp.responseT)


}
