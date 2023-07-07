/** 
 * Cuando la ventana o el documento se a leido o a cargado invocamos un evento en la pagina
 * 
 * palabra clave:
 * objeto.addEventListener("accion", function)
 * la funcion que debe invocar. la funcion en esta estructura no lleva ()
 * 
 * window.addEventListener("load", function)
*/
window.addEventListener("load", function(){
    /*contenido de la funcion anonima al leer el documento*/
    console.log(document);
    /*acceder a cada uno de los elementos*/
    const card2=this.document.getElementById("card-2");
    console.log(card2);
    const element = this.document.getElementsByTagName("p");
    console.log(element);

    /* convertir un htmlCollection en array para manipular
    Existen dos maneras:
    1. let elements=[...document.getElementsByTagName("p")];
    2. let elements=Array.from(document.getElementsByTagName("p"));
      */
     let elementsDiv=[...document.getElementsByTagName("div")];
     console.log(elementsDiv);
     let elementsParrafo=Array.from(this.document.getElementsByTagName("p"));
     console.log(elementsParrafo);
     let primerP=elementsParrafo[0];
     primerP.style.background="#6DCFF6";
     /*acceder a los elementos siguiendo un evento */
     primerP.addEventListener("click",function(){
        primerP.style.backgroundColor="purple";
     });
     let segundoP=elementsParrafo[1];
     /*unafuncion anonima, es decir funcion() se puede tambien utilizar de la siguiente manera
     ()=>{
        ..instrucciones
     }
     */
     segundoP.addEventListener("click",()=>{
        /*vamos a llamar la funcion random y sustituir el valor dentro de variable colorFondo*/
        let colorRed=random(255);     
        let colorGreen=random(255);     
        let colorBlue=random(255);
        let colorFondo="rgba("+colorRed+","+colorGreen+","+colorBlue+",0.5)"
        console.log(colorFondo);
        this.document.body.style.backgroundColor=colorFondo;     
     });

     /*
ejercicio: cambiar color de titulo de la caja 3 si se pulsa clic sobre el titulo
 */
let encabezados=Array.from(this.document.getElementsByClassName("titulo"));
console.log(encabezados);

    
    let titulo3=encabezados[2];
    titulo3.addEventListener("click",function(){
       titulo3.style.color="orange"; 
    });

    /*Cambiar el color de todos los encabezados */
    let titulo4=encabezados[3];
    titulo4.addEventListener("click",()=>{
        encabezados.forEach(cambiarColor);
    });

    /*Cambiar la letra a cursiva de los parrafos cuando pulses clic en el tercer parrafo */
    
    
    let tercerP=elementsParrafo[2];
    tercerP.addEventListener("click",()=>{
        elementsParrafo.forEach(cambiarLetra);
    });

    let div5=elementsDiv[5];
    div5.addEventListener("mouseover",()=>{
        div5.style.opacity="0.5";
    });
    div5.addEventListener("mouseout",()=>{
        div5.style.opacity="1";
    })

    /*Agregar una imagen, y hacer lo mismo que el div5*/

    let div6=elementsDiv[6];
    div6.addEventListener("mouseover",()=>{
        div6.style.opacity="0.5";
    });
    div6.addEventListener("mouseout",()=>{
        div6.style.opacity="1";
    })


});
    function cambiarLetra (item, index) {
        item.style.fontStyle="italic";
    }

    function cambiarColor(item,index){
        console.log(item);
        console.log(index);
        item.style.color="green";
    }
    function random(numero){
    let result= Math.floor(Math.random()*(numero+1));
    console.log(result);
    return result;

    }







