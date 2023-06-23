/**
 * Concepto básico de funciones o métodos:
 * 
 * Una funcion JavaScript es un bloque de código diseñado para realizar una tarea *particular.
 * Una función JavaScript se ejecuta cuando "algo" lo invoca (lo llama).
 * 
 * Las funciones pueden ser propias, como por ejemplo:
 *  function guardarNombre(){
 *      ....bloque de instrucciones
 * }
 * 
 * para que ejecute ese bloque de instrucciones, la funcion tiene que ser invocada ya sea en un javascript o desde el html
 * 
 * guardarNombre();
 * o desde html....onclick="guardarNombre()"
 * 
 * Tambien existen funciones propias del lenguaje, que no se realizan algunas tareas de manera automatica.
 * 
 * Ejemplo: Funciones útiles para cadenas de texto
 */

// Funcion para conocer la longitud de una cadena, incluyendo los espacios
let cadena1="Hola, como estais todos hoy? ";
let nLetras=cadena1.length;
console.log(nLetras);

//Funcion que concatena
let cadena2="Bien, gracias!";
let cadena=cadena1.concat(cadena2); //es lo mismo cadena1+cadena2
console.log(cadena);

//Concatenar en un bucle
for (let i=1; i<cadena1.length;i++){
    cadena+=cadena1;
}
console.log(cadena);


//Función para pasar a mayusculas una cadena de texto

cadena1=cadena1.toUpperCase();
console.log(cadena1);

//Funcion para convertir una cadena a minusculas

cadena1=cadena1.toLowerCase(); //toLocaleLowerCase -> se refiere al idioma o configuracion local, pero el resultado suele ser el mismo que toLowerCase
console.log(cadena1);

//funcion para obtener el caracter que se encuentra en la posicion indicada

let letra=cadena1.charAt(0); //retorna h
console.log(letra);

//funcion indexOf(letra) calcula la posicion en la que se encuentra la letra indicada, siempre mostrará la primera posicion

let posicion=cadena1.indexOf('a');
console.log(posicion);

//lastIndexOf calcula la ultima posicion del caracter indicado,
//tanto indexOf como lastIndexOf devuelven -1 si no ncuentran ese caracter.
posicion=cadena1.lastIndexOf('a');
console.log(posicion);

/**Importante:
 * La funcion lastIndexOf() comienza su búsqueda desde el final de la cadena hacia el principio, aunque la posicion devuelta es la correcta empezando a contar desde el principio de la palabra */

//Funcion para extraer de una cadena
/*substring (inicio, final ), extrae una porcion de una cadena de texto. El segundo parametro es opcional. si solo se indica el parametro inicio, la funcion devuelve la parte de la cadena original correspondiente desde la posicion hasta el final*/

let subcadena1=cadena1.substring(6,10);
console.log(subcadena1);

/**
 * Cuando se indica el inico y el final, se devuelve la parte de la cadena original comprendida entre la posicion inicial y la inmediatamente anterior a la posicion final (es decir, la posicion inicio esta incluida y la posicion final no):
 */
/*Otro ejemplo, se se le pasa la posicion inicial mayor a la final, se asume que es la posicion menor es desde donde comienza y la mayor donde termina*/

subcadena1=cadena1.substring(10,6);
console.log(subcadena1);

/**convertir una cadena a un array con la funcion split, se debe indicar el caracter separador */

let cadena3="Los alumnos son 15 y son muy listos";
let arrayCadena3=cadena3.split(" ");
console.log(arrayCadena3);
console.log(arrayCadena3[1]);

/**con split tambien puedo extraer todas las letras de una cadena indicando el separador vacio "" */

let array2Cadena3=cadena3.split("");
console.log(array2Cadena3);


//FUNCIONES UTILES PARA ARRAYS

//conocer la longitud de un array

let miArray=[1,2,3,4,5,6,7,8,9];
//*explicacion en la linea 150
let micopiaArray=miArray; //con una asignacion = 
console.log(micopiaArray);
let numElementos=miArray.length;
console.log(numElementos);

//funcion para unir o concatenar dos arrays

let array3=array2Cadena3.concat(miArray);
console.log(array3);

//funcion join que es lo inverso a split en las cadenas, convierte un Array en una cadena

let deArrayAcadena=arrayCadena3.join(" ");
console.log(deArrayAcadena);
let miArrayAcadena=miArray.join("-");
console.log(miArrayAcadena);

/*funcion pop(), elimina el ultimo elemento del array y lo devuelve. El array original se modifica y su longitud disminuye en 1 elemento.*/

let ultimo=miArray.pop();
console.log(ultimo);
console.log(miArray);

/*funcion push(), añade un elemento al final del array. El array original se modifica y aumenta su longitud en 1 elemento. (También es posible añadir más de un elemento a la vez)
 */

miArray.push("Irina");
console.log(miArray);

/**
 * funcion shift(), elimina el primer elemento de un array y lo devuelve. El array original se ve modificadoo y su longitud disminuida en 1 elemnto.
 */

let primero=miArray.shift();
console.log(primero);
console.log(miArray);

/**
 * fincion unshift(), añade un elemento al principio del array. El array original se modifica y aumenta su longitud en 1 elemento. (Tambien es posible añadir más de un elemento a la vez)
 */

let otroValor=5;
miArray.unshift(otroValor);
console.log(miArray);

/**
 * Funcion reverse(), modifica un array colocando sus elementos en el orden inverso a su posicion original
 */

miArray.reverse();
console.log(miArray);

/**
 * Es usual realizar operaciones con array, si es necesario para el flujo del programa que el array original se mantenga, debemos realizar una copia del array, porque estos metodos modifican directamente el array.
 * 
 */


/***************************************************************************/
/** 
 * Funciones con numero 
 */

/**
 * 
 * funcion NaN, (del ingles,"Not a Number") JavaScript emplea el valor NaN para indicar un valor numerico no definido (por ejemplo, la division 0/0).
 * 
 */

let numero1=10,numero2=0;
let operacion=numero1/numero2;
console.log(numero1/numero2); //NaN

if(operacion!=NaN){
    console.log("resultado indefinido");
}else{
    console.log("El resultado es ->"+numero1/numero2);
}

/*Numero infinitos
Infinity, hace referencia a un valor numerico infinito y positivo(tambien existe el valor -Infinity para los infinitos negativos)*/

let numero3=0;
console.log(numero1/0);

/*si necesitamos limitar los decimales y redondearlos, utilizamos la funcion toFixed*/
let decimales=54545.4155464654;
console.log(decimales.toFixed(3));
console.log(decimales.toFixed(2));
console.log(decimales.toFixed(4));
console.log(decimales.toFixed());

//Ejercicio: lee un numero decimal y devuelvelo convertido el . en ,
function cambiar(){
let numero=document.getElementById("numero").value;
console.log(numero);
let elementos=numero.split(".");
console.log(elementos);
let cadenaNumero=elementos[0] + ","+elementos[1];
console.log(cadenaNumero);
document.getElementById("numeroDev").innerHTML=cadenaNumero;
}

