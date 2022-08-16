function insert (num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}   

function clean(){
    document.getElementById('resultado').innerHTML = " ";
}

function back(){
    //variável resultado recebe a string digitada pelo usuário 
    var resultado = document.getElementById('resultado').innerHTML;

    //resultado.substring pega todos os caracteres do <p></p> e vai diminuir 1    
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}                                                                      //vê todos os caracteres da var resultados e diminui 1 

function calcular(){

    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else 
    {
        document.getElementById('resultado').innerHTML = "Nada para calcular";
    }
}