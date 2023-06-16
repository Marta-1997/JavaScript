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