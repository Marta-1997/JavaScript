alert("!BIENVENIDOS! Tenemos una nueva sección de suscripción de noticias.")

  window.addEventListener("load",function(){
    let d = new Date();
    this.document.querySelector("#fecha").innerHTML=d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear();
    this.document.querySelector("#hora").innerHTML=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

  })
    
    window.addEventListener("load",function(){
        let formPago=document.querySelectorAll("input[name='fPago']");
        console.log(formPago);
    })   
        
    for (let i=0;i<2;i++){
        formPago[i].addEventListener("change", function(){
        console.log("entra");
    let divFormTC=document.querySelector("#formTC");
    divFormTC.style.display="block";
    let divFormPP=document.querySelector("#formPP");
    divFormPP.style.display="none";
    
    })
    
    let miInput=Array.from(this.document.querySelector("#form"));
    console.log(form);
    miInput[0].addEventListener("input",()=>{
   
        miInput[0].setCustomValidity('');
        miInput[0].chekValidity();
    });
    
    miInput[0].addEventListener('invalid',()=>{
        miInput[0].style.background="#ffcdd2";
        miInput[0].setCustomValidity("Indica tu Nombre!");
    });
    
    miInput[2].addEventListener("input",()=>{
        let hoy=new Date;
        let fVisita=new Date(miInput[2].value);
        console.log(fVisita);
    });

    
    
    
    }
