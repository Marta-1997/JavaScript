/**
 * Estructuras de control de flujo
 * ------------------------
 * Bucle for: La estructura for permite realizar repeticiones
 * for (inicializacion; condicion; incremento){
 * 
 * }
 */
for(let i=0;i<10;i++){
    console.log(i);
}
console.log("salida del bucle");
/**
 * La idea del funcionamiento de un bucle for es la siguiente: "mientras la condicion indicada se siga cumpliendo, repite la ejecucion de las instrucciones definidas dentro del for. Además, despues de cada repeticion, actualiza el valor de las variables que se utilizan en la condicion"
 */


//ejemplo de un bucle con los diferentes <hX> de html
function salidaH(){
for(let i=1;i<=6;i++){
    document.write("<h"+i+">"+"Encabezado de nivel"+i + "</h"+i+">");
}
}
/*
Ejercicio 7 
El actorial de un numero entero n es una operacion matematica que consiste en mutiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 =120
Utilizando la estructura for, crear un script que calcule el factorial de un numero entero
*/

function calFact(){
    let numero=document.getElementById("numero").value;
    //borrar el contenido de esos selectores
    document.getElementById("msnError").innerHTML="";
    document.getElementById("resultadoFact").innerHTML="";
    //verificar que lee correctamente el numero
    console.log(numero);
    if(isNaN(numero)){ // si no es un numero 
         //ha cometido un error al introducir el numero 
         let msnError="Indica un número, no letras!";
         document.getElementById("mnsError").innerHTML=msnError;
       
    }
    else{
         //hacemos el bucle factorial
         let resultado=1; // se inicializa en 1
         //bucle
         for(let i=1; i<=numero; i++) {resultado*=i; 
         }
         document.getElementById("resultadoFact").innerHTML=resultado;
    }
}
/**
 * Estructura for... in 
 * una estructura de control derivada de for es la estructura for... in. Su definicion exacta implica el uso de objetos, que es un elemento 
 */
function mostrarDias(){
    let dias=["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    let etiqueta;
    for(i in dias){
        etiqueta="etiqueta"+i;
        document.getElementById(etiqueta).innerHTML=dias[i];
    }
}