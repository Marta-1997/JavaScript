/*


Matrices o vectores -> Arrays (arreglos)


*/
/**la declaración de variables aisladas como por ejemplo los días de la semana */
let dia1="Lunes";
let dia2="Martes";

/**Aunque la declaración anterior es correcta, es más eficiente cuando tenemos una colección d datos que guardan relación, al crear Arrays 
 * 
 * sintaxis de un array
 * let nombre_array=[valor1, valor2,...valorn]
*/
let dias=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado", "Domingo"];
/**
 * Aspectos importantes para el uso de Array
 * 1. Cada elemento tiene un indice
 * 2. Los indices comienzan en 0
 * 3. Para acceder a un elemento lo tenemos que llamar con el nombre de aray y su indice->
 * dias[0]-> Lunes
 * 4 Puedo conocer el número de elementos de un Array.
 */
document.getElementById("miSalida").innerHTML=dias[0];
document.getElementById("miSalida2").innerHTML=dias[6];

/** Ejercicio: Realiza un array con los meses del año y muestra en pantalla al menos 3 meses de verano */
let meses=["Enero","Febreo","Marzo","Abril","Mayo","Junio","Julio","Agosto", "Septiembre","Octubre","Noviembre","Diciembre"]
document.getElementById("verano").innerHTML=meses[5]+ " - " +meses[6]+" - "+meses[7];
 
/** A partir del siguiente array que se proporciona:  */
let valores=[true, 5, false,"hola","adios",2];
/* 
* Determinar cual de los dos elementos númericos es mayor.
* Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false.
* Determinar el resultado de los cinco operaciones matematicas realizadas con los dos elementos númericos*/
let resultado1=valores[1]>valores[5]?"El valor del indece 1 es mayor":"El valor del indice 5 es mayor";
document.getElementById("resultado1").innerHTML=resultado1;
//resultado true
let resultado2=valores[0]||valores[2];
//true || false-> true
document.getElementById("resultado2").innerHTML=resultado2;
//resultado false
let resultado3=valores[0]&& valores[2];
//true && false-> false
document.getElementById("resultado3").innerHTML=resultado3;
//Operaciones matematicas
let suma=valores[1]+valores[5];
document.getElementById("suma").innerHTML="El resultado de la suma es: "+suma;
let resta=valores[1]-valores[5];
document.getElementById("resta").innerHTML="El resultado de la resta es: "+resta;
let multiplicar=valores[1]*valores[5];
document.getElementById("multiplicar").innerHTML="El resultado de la multiplicacion es: "+multiplicar;
let dividir=valores[1]/valores[5];
document.getElementById("dividir").innerHTML="El resultado de la división es: "+dividir;
let modulo=valores[1]%valores[5];
document.getElementById("modulo").innerHTML="El resultado del modulo es: "+modulo;

/** CONDICIONALES IF-ELSE */
let edad=18;
if(edad>=18){ //condición
    // grupo de instrucción
    ++edad;
    let cumple="El año que viene tendras " +edad;
    let mensaje="ya podras ir a la Disco";
    document.getElementById("mensajes").innerHTML= cumple + " años y " +mensaje;
}else{ //sino se cumple la condición
    let mensaje="Espera un poco";
    document.getElementById("mensajes").innerHTML=mensaje;
}

let mostrar=true;

if (mostrar){//mostrar==true
    document.getElementById("mostrado").innerHTML="Entro al if porque mostrado es verdadero"
}else{
    document.getElementById("mostrado").innerHTML="No entro al if, sino al else porque mostrado es falso"
}

// Cuando necesitamos evaluar una negación de un booleano (True/false) utilizamos el simbolo ! antes de la variable
if (!mostrar){//mostrar==false
    document.getElementById("mostrado2").innerHTML="Entro al if porque mostrado es falso"
}else{
    document.getElementById("mostrado2").innerHTML="No entro al if, sino al else porque mostrado es falso"
}
/*
 let numero1=5;
 let numero2=8;
 
 if(numero1<numero2){
    alert("numero1 no es mayor que el numero2")
 }
 
 if(numero2>=0){
    alert("numero2 es positivo")
 }
 
 if(numero1<0 || numero!=0){
    alert("numero1 es negativo o distinto de cero")
 } 
 
 if(++numero1<=numero2){
    alert("Incrementa en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2")
 }*/

 /**Existe la opción de anidar if-else -if-else */
 /** Ejemplo  */
 /** si eres <12 eres perqueño, si eres <19 eres adolescente, 
  * si eres <35 sigues siendo joven 
  * sino...."cuidate mucho"
  */
let nEdad=42;
let msnEdad;
if(nEdad<12){
    msnEdad="Todavia eres muy pequeño";
}else if(nEdad<19){
    msnEdad="Eres Adolescente";
}else if(nEdad<35){
    msnEdad="Todavia eres joven"
}else{
    msnEdad="Cuidate mucho!"
}
document.getElementById("msnEdad").innerHTML=msnEdad;



