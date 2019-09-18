function zero(){
    var vzero = 0;
    document.getElementById("visor").value = document.getElementById("visor").value + vzero;
}
function one(){
    var vone = 1;
    document.getElementById("visor").value = document.getElementById("visor").value + vone;
}
function two(){
    var vtwo = 2;
    document.getElementById("visor").value = document.getElementById("visor").value + vtwo;
}
function three(){
    var vthree = 3;
    document.getElementById("visor").value = document.getElementById("visor").value + vthree;
}
function four(){
    var vfour = 4;
    document.getElementById("visor").value = document.getElementById("visor").value + vfour;
}
function five(){
    var vfive = 5;
    document.getElementById("visor").value = document.getElementById("visor").value + vfive;
}
function six(){
    var vsix = 6;
    document.getElementById("visor").value = document.getElementById("visor").value + vsix;
}
function seven(){
    var vseven = 7;
    document.getElementById("visor").value = document.getElementById("visor").value + vseven;
}
function eight(){
    var veight = 8;
    document.getElementById("visor").value = document.getElementById("visor").value + veight;
}
function nine(){
    var vnine = 9;
    document.getElementById("visor").value = document.getElementById("visor").value + vnine;
}
function adi(){
    var vadi = '+';
    document.getElementById("visor").value = document.getElementById("visor").value + vadi;

}
function sub(){
    var vsub = '-';
    document.getElementById("visor").value = document.getElementById("visor").value + vsub;

}
function mult(){
    var vmult = '*';
    document.getElementById("visor").value = document.getElementById("visor").value + vmult;
}
function div(){
    var vdiv = '/';
    document.getElementById("visor").value = document.getElementById("visor").value + vdiv;

}



function limp(){
    var vlimp = '';
    document.getElementById("visor").value = vlimp;

}
function kam(){
    var vkam = ',';
    document.getElementById("visor").value = document.getElementById("visor").value + vkam;
}


function res(X){
   var result = document.getElementById("visor").value;
     if(result){
         document.getElementById("visor").value = eval (result);
     }

}

