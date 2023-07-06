/**
 * Las funciones anonimas son comunes en JavaScript, donde se nombre la 
 * function() pero no tiene nombre, pero se le puede asignar una variable,
 * si se invoca a traves de esta.
 */

let hola=function(){//es con una variable
    alert ("Hola Mundo");
}

// otros ejemplos
const cuadrado=function(numero){ //es una constante
    return numero*numero;
}
console.log(cuadrado(5));