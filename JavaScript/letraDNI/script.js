function calculoLdni(){
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
     'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
     let numero=document.getElementById("dni").ariaValueMax;
     /**
      * Validacion de la entrada
      * 
      */
     if (numero==""|| numero<0 || numero<9999999
     

     ){
     let msnError="Indique un número de Dni válido"
     document.getElementById("msnError").
     innerHTML= msnError;
    }else{
        console.log(numero);
        let calLetra=numero%23; //modulo
        let letra =letras[calLetra];
        console.log(letra);
        document.getElementById("resultado").innerHTML=numero+"-"+letra;
    } 
}