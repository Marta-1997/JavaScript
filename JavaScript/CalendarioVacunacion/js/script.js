window.addEventListener("load",()=>{
    let mensaje=document.querySelector("#mensaje");
    let msn="";
let vacuna=document.querySelector("#formVcu");
vacuna.addEventListener("change", ()=>{
    let ponerVacuna=vacuna.value;
    switch(ponerVacuna){
        case "preNatal":{
            msn="DTPa: Vacuna frente a difteria, tétanos y tosferina acelular de alta carga antigénica";
            break;
        }
        case "dosM":{
            msn="HB: Vacuna frente a hepatitis B, DTPa: Vacuna frente a difteria, tétanos y tosferina acelular de alta carga antigénica, VPI: Vacuna frente a poliomielitis,Hib: Vacuna frente a enfermedad por haemophilus infl uenzae b, VNC: Vacuna conjugada frente a enfermedad neumocócica y Men B: Vacuna conjugada frente a enfermedad meningocócica por serogrupo B ";
            break;
        }
        case "cuatroM":{
            msn="HB: Vacuna frente a hepatitis B, DTPa: Vacuna frente a difteria, tétanos y tosferina acelular de alta carga antigénica, VPI: Vacuna frente a poliomielitis,Hib: Vacuna frente a enfermedad por haemophilus infl uenzae b, VNC: Vacuna conjugada frente a enfermedad neumocócica, Men C: Vacuna conjugada frente a enfermedad meningocócica por serogrupo C y Men B: Vacuna conjugada frente a enfermedad meningocócica por serogrupo B ";
            break;
        }
        case "seisM": {
            msn= "Gripe: Vacuna frente a gripe";
            break;
        }
        case "onceM": {
            msn="HB: Vacuna frente a hepatitis B, DTPa: Vacuna frente a difteria, tétanos y tosferina acelular de alta carga antigénica, VPI: Vacuna frente a poliomielitis,Hib: Vacuna frente a enfermedad por haemophilus infl uenzae b, VNC: Vacuna conjugada frente a enfermedad neumocócica y Gripe: Vacuna frente a gripe";
            break;
        }
        case "doceM":{
            msn="Men C: Vacuna conjugada frente a enfermedad meningocócica por serogrupo C, Men B: Vacuna conjugada frente a enfermedad meningocócica por serogrupo B y SRP: Vacuna frente a sarampión, rubeola y parotiditis (triple vírica) y Gripe: Vacuna frente a gripe";
            break;
        }
        case "quinceM":{
            msn="VVZ: Vacuna frente a varicela y Gripe: Vacuna frente a gripe";
            break;
        }
        case "cuatroA":{
            msn="SRP: Vacuna frente a sarampión, rubeola y parotiditis (triple vírica), VVZ: Vacuna frente a varicela y Gripe: Vacuna frente a gripe";
            break;
        }
        case "seisA":{
            msn="dTPa: Vacuna frente a difteria, tétanos y tosferina acelular de baja carga antigénica y VPI: Vacuna frente a poliomielitis";
            break;
        }
        case "doceA":{
            msn="Men ACWY: Vacuna conjugada frente a enfermedad meningocócica por serogrupos A, C, W e Y, VVZ: Vacuna frente a varicela y VPH: Vacuna frente a virus del papiloma humano ";
            break;
        }
        case "catorceA":{
            msn="Td: Vacuna frente a tétanos y difteria";
            break;
        }
        

    }
    mensaje.innerHTML=msn;

})
});