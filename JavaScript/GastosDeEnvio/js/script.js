// declaramos el iva como una constante y es global
const iva=1.21;
let valor;
/**
 * 1ª funcion que es llamada desde el HTML y envia 
 *   a. validar el dato introducido
 *      a.1. si el dato introducido es incorrecto envia mensaje de error
 *   a.2. si el dato es correcto, envia el dato a la 3ª funcio calcularPrecio, que mostrara el resultado del calculo.
 */

function calcular(){
    let peso=document.getElementById("peso").value;
    if (validarDatos(peso));{
        calcularPrecio(peso);

    }
}

function validarDatos(peso){
    if (isNaN(peso) || peso<0){
        document.getElementById("resultado").innerHTML="Error. No has escrito un número";

    }else{
        return true;
    }
}
function calcularPrecio(peso){
    if (peso>0 && peso<=1){
        valor=(11.82*iva).toFixed(2);
    }
    if (peso>1 && peso<=5){
        valor=(14.59*iva).toFixed(2);
    }
    if (peso>5 && peso<=10){
        valor=(19.09*iva).toFixed(2);
    }
    if (peso>10 && peso<=15){
        valor=(22.73*iva).toFixed(2);
    }
    if (peso>15 && peso<=20){
        valor=(27.69*iva).toFixed(2);
    }
    if (peso>20 && peso<=25){
        valor=(32.73*iva).toFixed(2);
    }
    if (peso>25 && peso<=30){
        valor=(37.73*iva).toFixed(2);
    }
    if (peso>30){
        valor="Debe consultar en oficiona."
    }
    if(isNaN(valor)){
        document.getElementById("resultado").innerHTML=valor;
    }else{
        document.getElementById("resultado").innerHTML="Te va a costar " + valor+ "€"; 
    }

   
}
