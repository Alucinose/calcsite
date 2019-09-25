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
   urlUsuarios = retorno.results[i].url;

   html = html + "<a href='#' onclick=Dados('"+urlUsuarios+"')>" + nome + "</a> <br>";
    }

    document.getElementById("usuarios").innerHTML = html; 
}

function Dados(url){
   
    var urlUsuarios = url;

    var xhttp = new XMLHttpRequest(); 
    
    xhttp.open("GET", urlUsuarios, false);
    
    xhttp.send();
    
    var retorno = JSON.parse(xhttp.responseText) 
    console.log(xhttp.responseText)
     
    var html = "";

        
    html = html + "<a ('"+urlUsuarios+"')>" 
    + "<br>" + "Nome: " + retorno.name 
    + "<br>" + "Altura: " + retorno.height 
    + "<br>" + "Peso: " + retorno.mass  
    + "<br>" + "Cor do cabelo: " + retorno.hair_color  
    + "<br>" + "Cor da pele: " + retorno.skin_color 
    + "<br>" + "Cor dos olhos: " + retorno.eye_color 
    + "<br>" + "Ano do nascimento: " + retorno.birth_year
    + "<br>" + "Gênero: " + retorno.gender 
    + "</a> <br>"
    
    document.getElementById("descr").innerHTML = html;
}

function dadosFilmes(url){

    var urlFilmes = 'https://swapi.co/api/films/';

    var xhttp = new XMLHttpRequest(); 
    
    xhttp.open("GET", urlFilmes, false);
    
    xhttp.send();
    
    var retorno = JSON.parse(xhttp.responseText) 
    console.log(xhttp.responseText)
     
    var html = "";

    for(var a=0; a < retorno.filmes.length; a++  ){
        var f = retorno.results[a].films.length;
        
    html = html + "<a href='#' onclick=Dados('"+urlFilmes+"')>" + f + "</a> <br>";
   }
    
    document.getElementById("filmes").innerHTML = html;

}