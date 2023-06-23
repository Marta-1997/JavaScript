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


