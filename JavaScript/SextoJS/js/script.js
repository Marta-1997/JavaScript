/**
 * Bucles While
 * 
 * while (evalua una condicion)** se repite mientras la condicion sea true(positiva){
 * 
 *      //bloque de codigo
 * }
 * Ejemplo: mostrar en la consola los numeros del 1 - 15
 * 
 * cuando se trabaja con numeros u otro elemento, tenemos que evaluar o buscar la manera que salga del bucle sino se quedaria en bucle infinito
 *
 */
function primerWhile(){

    let num=0
    while (num<=15){
    console.log(num);
    // si no incrementanmos el valor de num el bucle se queda infinito, nunca terminará
    num++;
    }
//las condiciones simpre van a ser true o false 

    let interruptor=false;

    while(!interruptor){ // ! -> la exclamacion es negativa, es para indicar que esa variable es falsa, en el momento que sea verdadero se sale del bucle
    console.log(interruptor);
    let a="Maria", b="Juan";
    //--- si no cambio el valor de interruptor a true nunca terminara
    if (a != b){
        interruptor=true;
        console.log(interruptor);
    }


 }
}
 
function arrayWhile(){
//Declaramos una constante tipo array de marcaCoches
    const cars =["BMW", "Volvo", "Saab", "Ford"];
//indice que nos va a permitir salir del bucle
    let i =0;
//texto que mostrará con todos los valores segun vaya recorriendo el bucle
    let text=""; // se inicializa la variable text en blanco o vacía 

    while(cars[i]){
    text +=cars[i]+" ";
    console.log(text);
    i++;
    }
}

function cadenasWhile(){
//otro ejemplo

    let text2="";
    while (text2==""){
    text2=prompt("Escribe tu nombre");
    console.log(text2);
    }
    alert("Salio del bulcle!");
}

//Ejercicio: Lee un numero hasta que sea par, si no sigue leyendo!
function numeroParWhile(){
let num2;
    while (num2%2 !=0){
        num2=parseInt(prompt('Escribe un numero'));
    }
    alert("Es par");
}

/**
 * Bucle do While : Hacer mientras...
 * 
 * Es igual al while con la diferencia que siempre se ejecuta almenos 1 vez
 * 
 * do{
 * //Bloque de instrucciones....
 * }While(condicion);
 *
 * Ejemplo: Pedimos al usuario que escriba el nombre Maria y mientras no lo haga lo vuelva a pedir
 *  
 */
function nombreDoWhile(){
    let nombre='';
    do{
        nombre = prompt('Adivina el nombre');
    }
    while
        (nombre !='Maria');
        alert('Has acertado');
}
function numeroDoWhile(){
    let text=1;
    let i=1;
    do{
        text+='The number is ' +i;
        console.log(text);
    }
    while(i< text); //falso
    console.log('salio del bucle');
}




