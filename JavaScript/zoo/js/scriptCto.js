/**/
//variables globales: pueden ser leidas por todas las funciones
let mensajeError=document.querySelector("#mensaje");
let msn="";// la cadena de mensaje de errores
window.addEventListener("load", ()=>{
    /**
     * 
     * Crear efecto de las imagenes
     * 
     */
    let imagenes=document.querySelectorAll(".imagen");
    imagenes.forEach(items=>{
     items.addEventListener("mouseover",()=>{
            items.style.width="35%";
        });
        items.addEventListener("mouseout",()=>{
            items.style.width="auto";
        });
    })
    

    /************************************************** */
    let selecion=document.querySelector("#formCto");
    // declaramos los div ocultos
    let divTel=document.querySelector(".telOculto");
    let divEmail=document.querySelector(".emailOculto");
    let divCorreo=document.querySelector(".correoOculto");
    selecion.addEventListener("change", ()=>{
        let valorSeleccion=selecion.value;
        switch (valorSeleccion){
            case "telefono":{
                divTel.style.display="block";
                divEmail.style.display="none";
                divCorreo.style.display="none";
                break;
                
            }
            case "email":{
                divTel.style.display="none";
                divEmail.style.display="block";
                divCorreo.style.display="none";
                break;
            }
            case "correo":{
                divTel.style.display="none";
                divEmail.style.display="none";
                divCorreo.style.display="block";
                break;

            }
            default:{
                alert("no selecciono nada");

            }
        }

    })   
    
    /**Leer el resto de formulario */
    let boton=document.querySelector("#boton");
    // si pulsa al boton ...leera los datos
    boton.addEventListener("click", ()=>{
    let nombre=document.querySelector("#fname");
    let apellido=document.querySelector("#lname");
    let mensaje=document.querySelector("#subject");
    console.log(nombre+" "+apellido+" "+mensaje);
    validarNombre(nombre);
    validarApellido(apellido);

    let telefono=document.querySelector("#telefono");
    let email=document.querySelector("#email");
    let direccion=document.querySelector("#direccion");
    validarFormCto(telefono,email,direccion);
    /*quitar el rosa de error cuando pulsas click en un tipo imput*/
    let inputs=document.querySelectorAll(".entrada");
    inputs.forEach(items=>{
    items.addEventListener("focus",()=>{
        items.style.color="black";
        items.style.background="white";
        
    })
    })
})


});
function validarNombre(nombre){
    if (nombre.value==null || nombre.value=="" || nombre.value==" "){
        msn="Indique un nombre valido";
            nombre.style.color="white";
            nombre.style.background="pink";
            nombre.setAttribute("placeholder","Escribe bien tu nombre...")

    }

}
function validarApellido(apellido){
    if (apellido.value==null || apellido.value=="" || apellido.value==" "){
        msn="Indique un apellido valido";
            apellido.style.color="white";
            apellido.style.background="pink";
            apellido.setAttribute("placeholder","Escribe bien tu apellido...")

    }

}
function validarFormCto(telefono, email, direccion){
    if(telefono.value=="" && email.value=="" && direccion.value==""){
        let seleccion=document.querySelector("#formCto");
        seleccion.style.color="white";
        seleccion.style.background="pink";
    }
   

}