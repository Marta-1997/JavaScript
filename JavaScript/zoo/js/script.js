
    
let arrayImg=new Array (4); // declarando que este array va a tener 4 elementos
arrayImg[0]=new Image();//
arrayImg[0].src="img/fotaza-leones.webp";
arrayImg[1]=new Image();//
arrayImg[1].src="img/oso-polar.webp";
arrayImg[2]=new Image();//
arrayImg[2].src="img/zorro.webp";
arrayImg[3]=new Image();//
arrayImg[3].src="img/serpiente.webp";

//declaramos un contador que lleve la cuenta de las imagenes que se van mostrando y comienza en 1 y acaba en 4
let contador=0;
function cambiarImagen() {
    document.querySelector("#banner").src=arrayImg[contador].src;
    contador++;
    console.log(contador);
    // operador ternario
    contador=contador==4?contador=0:contador;
    console.log("despues del ternario: "+contador);
   
    setTimeout("cambiarImagen()",5000);// se llama a si mismo
    
}
function validarFormulario(){
    alert("validando....");

}

window.addEventListener("load",()=>{
    // las funciones que voy a llamar cuando la pagina cargue
    let boton=document.querySelector("#boton");
    boton.addEventListener("click",validarFormulario);
    cambiarImagen();

});