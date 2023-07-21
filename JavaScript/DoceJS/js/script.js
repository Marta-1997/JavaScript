/*FECHAS*/
window.addEventListener("load",function(){
let d = new Date();
this.document.querySelector("#fecha").innerHTML=d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear();
this.document.querySelector("#hora").innerHTML=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

let fNacimiento=new Date(2010,9,16,11,25,10);
this.document.querySelector("#fNaci").innerHTML=fNacimiento;
this.document.querySelector("#fcorta").innerHTML=fNacimiento.toLocaleDateString()+" "+fNacimiento.getHours();

/*
Existe en la programación dos palabras en ingles que representan la acción que va a hacer el metodo:
    ·ger -> recupera o muestra el valor 
    ·set -> lo asigna
*/

fNacimiento.setHours(10);

this.document.querySelector("#fcorta2").innerHTML=fNacimiento.toLocaleDateString() +" "+ fNacimiento.getHours();

/*operaciones con fechas */

let beaM= new Date ("1998-7-3");
let beaL= new Date ("1992-5-8");

if(beaM<beaL){
    console.log("La mayor s Bea Mena");
}else{
    console.log("La mayor es Bea Lopez");
}

console.log(beaL.getFullYear()+67);

//primero calcula edad actual
//edad de jubilacion 67

let hoy=new Date();
let edadActualBeaL=hoy.getFullYear()-beaL.getFullYear();
console.log(edadActualBeaL);//31

//segundo sumarle
let edadJubBeaL=67-edadActualBeaL;
console.log(edadJubBeaL);//36
let fechaJubile=hoy.getFullYear()+edadJubBeaL;
console.log(fechaJubile);//2059

let boton=this.document.querySelector("#boton");
boton.addEventListener("click",function(){
   // let fechaInp=document.querySelector("#fechaInp").value;
//

    //console.log(fechaInp);
    //console.log(typeof(fechaInp));
    //let fechaForm=new Date(fechaInp);

let fechaInp = new Date(document.querySelector("#fechaInp").value); 
    //ojo-> aqui solo se utiliza una sola variable
    console.log(fechaForm.toLocaleDateString());

});

});

