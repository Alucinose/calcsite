var valor1 = document.getElementById("v1");
var valor2 = document.getElementById("v2");
var valor3 = document.getElementById("v3");
var result = document.getElementById("visor");

function resultado(){
    var result1 = eval(valor1.value * valor1.value);
    var resultf = eval(result1 - 4 * valor2.value * (valor3.value));

    result.value = resultf;
}

