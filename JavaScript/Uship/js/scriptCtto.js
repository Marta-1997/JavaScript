


function valida_envia(){
  
  if (document.fvalida.nombre.value.length==0){
       alert("Tiene que escribir sus datos")
       document.fvalida.nombre.focus()
       return 0;
  }

  
  

 
  if (document.fvalida.interes.selectedIndex==0){
       alert("Debe seleccionar un motivo de su contacto.")
       document.fvalida.interes.focus()
       return 0;
  }

  
  alert("Muchas gracias por enviar el formulario");
  document.fvalida.submit();
}