/*
Estes script enseña
1.comentarios
2.insertar codico en el HTML con document.getElementById.innerHtml
3.leer codigo desde el HTML con document.getElementById.value
4.Declarar variables - Tipos de Variables
5. asignar valores a variables
6.mostrar en la consola del navegador salidas -> console.log
7.crear operaciones matematicas basicas
8.declarar una funcion 
9.llamar a la funcion desde HTML / llamar una funcion desde el mismo JavaScript -> miFuncion()
10.Convertir un valor de cadena a uno entero con parseInt
11.Incremento y decremento de valores con ++ --
12.Declarar constantes
13.Caracteres de escape en cadena de caracteres
14.Alertas
15.Document.write
*/

//comentarios de linea
/*
    Comentarios de bloque
*/
//alert("Hola Mundo de Desarrollo Web"); //pequeña ventana que se muestra en el navegador

//acceder a los elementos por id ddel html
//1.crear una varible-> es un lugar en memoria donde se almacena un valor
//1.1 declarar la variable indicando un nombre - (comenzar: por letras, no numeros ,no caracteres especiales, $-> php comienza)
//      debe ser en minuscula o camello  -> nombreDelUsuario
//      una variable no debe contener espacios (no-> nombre del Usuario)
//  se puede utilizar barra baja_ tanto en el comienzo como el contenido del nombre, la buena practica es comenzar con letras o con dolar $

// let indica que estas declarando una variable
let nombre="Maria Perez"; //las comillas indican que es una cadena de caracteres, se pueden utilizar comillas dobles o simples, las dos son permitidas

//declaramos una variable llamada parrafo que se enlaza con el id del HTML 
let parrafo=document.getElementById("parrafo");
//le indicamos a esa variable que inserte el valor de la otra variable que es nombre
parrafo.innerHTML=nombre;

//console.log -> es una instruccion que se muestra en la consola del navegador;
console.log(nombre);

document.getElementById("demo").innerHTML="Hello JavaScript";

//variables tipo entero 
let numero1=45;
let numero2=25;
let suma=45+25;
console.log(suma);
let apellido="Ruiz";
//remplazo el valor de nombre concatenando con el apellido
nombre=nombre+" "+apellido; //esto se llama concatenar cadenas de caracteres
console.log(nombre);
document.getElementById("nuevoNombre").innerHTML=nombre;

//caracteristicas de javascript es que no declaras el tipo de dato ej:
numero1="uno";
suma=numero1+numero2;
console.log(suma); //el console es una manera de visualizar una salida en javascript

//crear mi primera funcion-> las funciones son una serie de instrucciones que se ejecutaran cuando sea llamada
/*
la siguiente funcion muestra una alaerta e inserta un parrafo en el lugar donde se identifica id=parrafo2
*/
function mostrarAlerta(){
    alert("Hola Chicos");
    document.getElementById('parrafo2').innerHTML= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maiores harum, natus eveniet asperiores sit quo voluptas temporibus odit quidem alias illum voluptatem quas laudantium nemo itaque magnam nihil delectus?"
} //cuando le das clik a la alerta sale el parrafo

//otra manera de llamarlo -> escuchar de evento
/*document.getElementById('boton1').onclick = function(){
 alert('Hey Alerta Wey');
}*/

/*paso de parametros a una funcion

*/
function sumar2(){
    //leemos del formulario los valores que se ingresan
    //casting  significa cambiar de un tipo a otro... caracteres->numeros
let x=parseInt(document.getElementById("numero1").value);
let y=parseInt(document.getElementById("numero2").value);

document.getElementById("suma2").innerHTML="el valor de x es " + x + "el valor de y es "+ y + " y la suma de estos dos valores es " + (x+y) ;
}

document.getElementById("suma").innerHTML=sumar(45,34)
function sumar(a,b){
    return a+b;
}

//existe otra manera de declarar las variables antes de 2015
var nombreAlumno="Rosa Huertas";
console.log(nombreAlumno);
//diferencia entre var y let
//1. se puede volver a declarar la misma variable
var nombreAlumno="Jose Martinez";
console.log(nombreAlumno);
// ejemplo con let 
let nombrePadre="Miguel Garcia";
console.log(nombrePadre);
//no se puede declarar de nuevo una variable con let 
//en el mismo bloque de codigo
function otroNombre(){
    let nombrePadre="Gonzalo Leon";
    console.log("dentro de la funcion->"+nombrePadre)
}
otroNombre();//llamamos la funcion para que se ejecute
console.log("fuera de la funcion->"+nombrePadre);
//en la declaracion de las variables se puede declarar una o mas variables en la misma linea
//var nombreMadre;//declaracion->indicando que nombreMadre es una variable
let nombreMadre="Sofia Luna", nombreNino="Fiona Martinez", colegio="Cervantes";
//las variables no estas obligado a declararlas, pero es importante y buena practica
edad=15;// tipo entero.. una variable de numeros enteros
console.log(edad);
precio=5.8;//decimal
edad=18;// reemplaza el valor
console.log(edad);
nombreMadre="Rosa Diaz"; //le asigno a la variable nombreMadre el valor de Rosa Diaz
console.log(nombreMadre);
/* Lo que guarda en una variable 
        tipos-> numeros(5,4,5.59,etc)
                cadena de caracteres ("El nombre es") ej: un numero de telefono
                booleanos (true,false)-> (verdadero, falso)
                
*/
let miBooleano=true; //es algo parecido al on off o 0/1 
//en las cadenas de caracteres existe la limitante de utilizar comillas dobles "" dentro de una cadena
//para ello existe Caracteres de escape en cadenas de texto
let cadena="esta es una cadena\"muy importante\" de javaScript";
console.log(cadena);
//puedes combinar las dobles comillas con las comillas simples
let cadena2='esta es la segunda cadena "muy importante"';
console.log(cadena2);
cadena=" esta es una cadena 'muy importante' de javaScript";
console.log(cadena);
//salto de linea con caracteres de escape \n
cadena="esta es una cadena 'muy importante' \nde javaScript";
console.log(cadena);
/*Operadores Matematicos
    + - * /-> operaciones basicas
    % -> modulo o resto de dos numeros
 */
x=10;
y=2;
let modulo=10%2; // da como resultado el resto de la division
console.log("el modulo entre 10/2 es " + modulo);
let operacion=(x+2)*2 -(y/3);
console.log(operacion);

/*
Operadores de asignacion
    = asigna
    +=incrementa el numero ->x=x+2
    -= decrementa
    /= divide
    *= multiplica 
*/
x+=2 //x=12
console.log(x);
x-=2; //x=10
console.log(x);
x*=2; //20
console.log(x);
x/=2; //10
console.log(x);

//se puede utilizar el operador de asignacion += en las cadenas de caracteres 
cadena+=cadena2;
console.log(cadena);

//Operador de exponencial (exponente)
x=y**10;
console.log(x);
//Operador incremento
++y;
console.log(y);
//operador decremento
--y;
//salida de pantalla directamente insertando el texto en la
//ultima disponible.
document.write("El valor de y es " +y)

/*
                  - Constantes -
No cambian en el resto del programa, se declara con la "palabra reservada" const y se debe asignar su valor cuando es declarada

"palabra reservada" (palabras propias del lenguaje)
ej: let,var,const...

*/

const PI=3.141618; //las constantes se declaran en mayusculas para separarlas e identificarlas de las variables
const RUEDACOCHE=4;
const MONEDA=5;
//área de un circulo area=r**2xPI
let area=(50**2)*PI;

console.log(" El área de una circunferencia de radio 50 es " + area);



