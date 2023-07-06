/**
 * Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostar por pantalla el resultado devuelto por la función
 */
function leerDato() {
    let numero=document.getElementById("numero").value;
    if (validarDato(numero)){
        if (numero%2==0){
            document.getElementById("resultado").innerHTML="El número "+numero+ " es par";
        }else{
            document.getElementById("resultado").innerHTML="El número " +numero+ " es impar";
            
        }
    }



}

// Importante para validar números
//Los parametros o atributos que se pasan en una función no tienen porque llamarse igual que en la función origen.

function validarDato(dato){
    if(isNaN(dato)|| dato=="" || dato.includes(" ") || dato==0){
        document.getElementById("resultado").innerHTML="Indique un número, no letras,sin espacios"
    }else{
        return true;
    }
}

/**
 * Definir una función que muestre información sobre una cadena de texto
 * que se le pasa un argumento. A partir de la cadena que se le pasa,
 * la función determina si esa cadena está formada sólo por mayúsculas, solo por minusculas o por una mezcla de ambas
 */

function leerTexto(){
    let texto=document.getElementById("texto").value;
    if(isNaN(texto) && texto!=""){
        validarTexto(texto);  
    }else {
        document.getElementById("resultadoTexto").innerHTML="Escribe una cadena, solo letras!";

    }
   

}

function validarTexto(texto){
    if(texto==texto.toUpperCase()){
        document.getElementById("resultadoTexto").innerHTML="El texto esta en máyuscula-> "+texto.toUpperCase();
    }else if (texto==texto.toLowerCase()){
        document.getElementById("resultadoTexto").innerHTML="El texto esta en minuscula-> "+texto.toLowerCase();  
    } else {
        document.getElementById("resultadoTexto").innerHTML="El texto esta en minusculas y máyusculas ";  
    }
}


/**
 * Definir una función que determine si la cadena de texto que se le pasa
 * como parámetro es un palíndormo, es decir, si se lee de la misma forma
 * desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo:
 * "La ruta nos aporto otro paso natural"
 */

function leerPalindromo(){
    let palindromo=document.getElementById("palindromo").value;
    if (isNaN(palindromo)){
        texto="Palindroma";
    }else{
        texto="Capicua";
    }
    if(palindromo!=""){
    if (validarPalindromo(palindromo)){
        document.getElementById("resultadoPalindromo").innerHTML="La Frase '"+palindromo+ "' es " +texto;
    }else{
        document.getElementById("resultadoPalindromo").innerHTML="La Frase '"+palindromo+ "' no es " +texto;
    }
    }else{
        document.getElementById("resultadoPalindromo").innerHTML="Indica una frase o palabra valida"
    }
}


function validarPalindromo(texto){
    //pasar a minuscula eliminar los espacios en blanco
    let cadenaOriginal=texto.toLowerCase().replaceAll(" ","");
 
    //convertir la cadena en un array sin espacios
    let letrasEspacios=cadenaOriginal.split(" ");
    //convertir la cadena en un array separado por letras y invertido
    let letrasReves=cadenaOriginal.split("").reverse();
    console.log(letrasEspacios);
    console.log(letrasReves);
    //creamos el aray en cadena
    let cadena1=letrasEspacios.join("");
    let cadena2=letrasReves.join("");
    //comparamos las dos cadenas
    if (cadena1==cadena2){
        return true;
    }else{
        return false;
    }


}