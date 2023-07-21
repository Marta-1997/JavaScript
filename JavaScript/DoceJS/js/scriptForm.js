/*
Script para VALIDAR FORMULARIOS y darle dinamismo
*/
window.addEventListener("load",function(){
    let formPago=document.querySelectorAll("input[name='fPago']");
    console.log(formPago);

    
for (let i=0;i<2;i++){
    formPago[i].addEventListener("change", function(){
    console.log("entra");
let divFormTC=document.querySelector("#formTC");
divFormTC.style.display="block";
let divFormPP=document.querySelector("#formPP");
divFormPP.style.display="none";

})
}
formPago[2].addEventListener("change", function(){
    console.log("entra");
let divFormPP=document.querySelector("#formPP");
divFormPP.style.display="block";
let divFormTC=document.querySelector("#formTC");
divFormTC.style.display="none";
})

formPago[3].addEventListener("change", function(){
    console.log("entra");
let divFormB=document.querySelector("#formB");
divFormB.style.display="block";
    
})
})

--------


formPago[3].addEventListener("change",function(){
    divFormTC.style.display="none";
    divFormPP.style.display="none";
    divFormBZ.style.display="block";
});

let miInput=Array.from(this.document.querySelector("#form"));
console.log(form);
miInput[0].addEventListener("input",()=>{
    //vamos a quitar el mensaje mientras escribe
    miInput[0].setCustomValidity('');
    miInput[0].chekValidity();
});
//Mostrar el mensaje de validación
miInput[0].addEventListener('invalid',()=>{
    miInput[0].style.background="#ffcdd2";
    miInput[0].setCustomValidity("Indica tu Nombre!");
});

miInput[2].addEventListener("input",()=>{
    let hoy=new Date;
    let fVisita=new Date(miInput[2].value);
    console.log(fVisita);
    if fVisita.getMonth()<hoy.
});