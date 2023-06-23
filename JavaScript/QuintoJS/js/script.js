/**
if - else -> tambien existe otra estructura de control de flujo que es el switch-casa
su funcion es: segun el parametro o valor que contenga, puede realizar una serie de opciones
    ej:
    switch(expression){
    case x: 
        // code block
        break; // para salir del switch y no seguir evaluando los siguientes casos
    case y: 
        // code block
        break;
    default:
        // code block
    }
    *

    Así es como funciona:
    
    La expresion de cambio se evalua una vez.
    El valor de la epresion se compara con los valores de cada caso.
    Si hay una coincidencia, se ejecuta el bloque dde codigo asociado.
    Si no hay ninguna coincidencia, se ejecuta el bloque de codigo predeterminado (default).
*/

//Ejemplo sencillo
let dia=9
console.log(dia);
let diaS; //declaramos una variable donde guardamos el nombre del dia
switch(dia){ //5
    case 1:
           diaS="Lunes";
            break; //salga del switch
    case 2:
            diaS="Martes";
            break;
    case 3:
            diaS="Miércoles";
            break;
    case 4:
            diaS="Jueves";
            break;
    case 5:
            diaS="Viernes";
            break;
    case 6:
            diaS="Sábado";
            break;
    case 7:
            diaS="Domingo";
            break;

    default:
        diaS="Ese dia no existe";
}
document.getElementById("dia").innerHTML=diaS;

/**
 * 
 * Ejercicio:
 * De la base de la puntuacion numerica de los alumnos,
 * indicamos que del 0 al 4 ->Insuficiente
 *                   5 al 6 ->Bien
 *                   7 al 8 ->Notable
 *                   9 al 10 ->Sobresaliente
 */
function calculoNota(){
let nota= parseInt( document.getElementById("nota").value);
let notaF; 
switch(nota){ 
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
           notaF="Insuficiente";
            break; 
    case 5:
    case 6:
           notaF="Bien";
            break; 
    case 7:
    case 8:
           notaF="Notable";
            break; 
    case 9:
    case 10:
           notaF="Sobresaliente";
            break; 
    default:
           notaF="Esa nota no existe";
   
}
document.getElementById("mns").innerHTML=notaF;

}

/**
 *  for(let i=1; i>10; i++)
 * 
 * Ejercicio: Mostrar en consola los numeros del 1 al 20 de mayor a menor
 * 
 * for (let i=20; i>0; i--)
 */

for (let i=20; i>0; i=i-2){
    console.log (i);
}

//bucle for each ->
//              1       2          3    4       5

function cambiarColor(){
let colores=["#f2f2f2","#601160","blue","red","#859475","#d8d5d7"];

let indice=parseInt(document.getElementById("numero").value);
--indice; 

for (let i=0;i<colores.length; i++){
    if(i==indice){
        //cambiar el color a el div caja
        // i contiene el indice del elemento en el array
        document.getElementById("caja").style.backgroundColor=colores[i];
        document.getElementById("dia").style.color=colores[i];

    }
 }
//recorrer el array con for of
for(let item of colores){
    //recorremos todos los elementos del array
    if (item=="#001100"){
        //item contiene el valor no el indice
    document.getElementById("caja2").style.backgroundColor=i;
    document.getElementById("caja2").style.transition="width 2s, height 2s, transform 2s";
    document.getElementById("caja2").style.transform="rotate(180deg)";
}

/**
 * transition-property: width;
 * transition-duration: 2s;
 * transition-property: height;
 * transition-delay: 2s;
 * 
 */
}



