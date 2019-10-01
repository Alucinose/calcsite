function fazerRequisicao(){


    var url = 'https://swapi.co/api/people/';
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);

        xhttp.onload = function(e) {
              if (xhttp.readyState === 4) {
                if (xhttp.status === 200){
                 response = JSON.parse(xhttp.responseText);
                 var html = "";
                for (var i = 0; i < response.results.length; i++) {
                    var nome = response.results[i].name;
                    var url = response.results[i].url;
                    html = html + "<a href='#' onclick=Dados('" + url + "');>" + nome + "</a><br>";
                }
                document.getElementById("descr").innerHTML = html;
             }else{
                 console.error(xhttp.statusText);
             }
         }
     };
     xhttp.send();
    
    
}

function siteNovo(){
    
    var urlNova = 'http://127.0.0.1:3000';
    var xhttp = new XMLHttpRequest();    
     xhttp.open("GET", urlNova, false);
     xhttp.send();
    
    var retorno = JSON.parse(xhttp.responseText) 
    console.log(xhttp.responseText)
     
    var html = "";


     html = html + "<a ('"+urlNova+"')>" + retorno.nome + "</a><br>"; 

    document.getElementById("siteN").innerHTML = html;
}

/*function Site(){
    var urlSite = '127.0.0.1:3000';
    var xhttp = new XMLHttpRequest();    
     xhttp.open("GET", urlSite, false);
     xhttp.send();
    
    var retorno = JSON.parse(xhttp.responseText) 
    console.log(xhttp.responseText)
     
    var html = "";

        
    html = html + "<a ('"+urlUsuarios+"')>" 
    + "<br>" + "Nome: " + retorno.nome 
    + "</a> <br>"
    
    document.getElementById("siteNovo").innerHTML = html;
}*/


/*var url='https://swapi.co/api/people/'; //Dei a url onde nós vamos acessar

var xhttp = new XMLHttpRequest(); //A biblioteca onde está os arquivos

xhttp.open("GET", url, false); //Dei o comando para ele pegar o arquivo do url

xhttp.send();//A execução do script para aqui até a requisição retornar do servidor

var retorno = JSON.parse(xhttp.responseText) //         ----- Maneira sincrona é quando você para e espera a resposta!!!!
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

    document.getElementById("usuarios").innerHTML = html; */


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

function Filmes(){

    var urlFilmes = 'https://swapi.co/api/films/';
    var xhttp = new XMLHttpRequest(); 
    xhttp.open("GET", urlFilmes, true);
    xhttp.onload = function(e) {
        if (xhttp.readyState === 4) {
          if (xhttp.status === 200){
           response = JSON.parse(xhttp.responseText);
           var html = "";
          for (var a = 0; a < response.results.length; a++) {
              var titulo = response.results[a].title;
              var url = response.results[a].url;
              html = html + "<a href='#' onclick=Dados('" + urlFilmes + "');>" + titulo + "</a><br>";
          }
          document.getElementById("filmes").innerHTML = html;
       }else{
           console.error(xhttp.statusText);
       }
   }
};
xhttp.send();
   

}

function dadosFilmes(urlFilmes){

    var urlF = urlFilmes;
    var xhttp = new XMLHttpRequest();    
     xhttp.open("GET", urlF, false);
     xhttp.send();
    
    var retorno = JSON.parse(xhttp.responseText) 
    console.log(xhttp.responseText)
     
    var html = "";

        
    html = html + "<a ('"+urlUsuarios+"')>" 
    + "<br>" + "Title: " + retorno.title
    + "<br>" + "Director: " + retorno.director 
    + "<br>" + "Producer: " + retorno.producer  
    + "<br>" + "Release date: " + retorno.release_date  
    + "</a> <br>"
    
    document.getElementById("filmes").innerHTML = html;

}

/*var retorno = JSON.parse(xhttp.responseURL) 
console.log(xhttp.responseURL)
 
var html = "";

for(var a=0; a < retorno.filmes; a++  ){
    var f = retorno.results[a].films.length;
    
html = html + "<a href='#' onclick=dadosFilmes('"+urlFilmes+"')>" + f + "</a> <br>";
}

document.getElementById("filmes").innerHTML = html;*/