function calculoEdad(){
    let edad=document.getElementById("edad").value;
    console.log(edad);

if(edad<12){
    msnEdad="Todavia eres muy pequeño";
}else if(edad<19){
    msnEdad="Eres Adolescente";
}else if(edad<35){
    msnEdad="Todavia eres joven"
}else{
    msnEdad="Cuidate mucho!"
}
document.getElementById("msnEdad").innerHTML=msnEdad;



}