function checar(){
    document.getElementById("porMes").checked=false
    document.getElementById("porDia").checked=true
    document.getElementById("horasTrabalhoDia").style.visibility="visible"
    document.getElementById("diasTrabalhoSemana").style.visibility="visible"
    document.getElementById("p1").style.visibility="visible"
    document.getElementById("p2").style.visibility="visible"
    document.getElementById("p3").style.visibility="hidden"
    document.getElementById("horasTrabalhoMes").style.visibility="hidden"

}

function deschecar(){
    document.getElementById("porMes").checked=true
    document.getElementById("porDia").checked=false
    document.getElementById("p3").style.visibility="visible"
    document.getElementById("horasTrabalhoMes").style.visibility="visible"
    document.getElementById("horasTrabalhoDia").style.visibility="hidden"
    document.getElementById("diasTrabalhoSemana").style.visibility="hidden"
    document.getElementById("p1").style.visibility="hidden"
    document.getElementById("p2").style.visibility="hidden"

}

function calcularOrcamento(){

  if(document.getElementById("porMes").checked==true){

    res.innerHTML="Seu salário por hora é: "+pormes()+" por hora"()
  }else if(document.getElementById("porDia").checked==true){
      
    res.innerHTML ="Seu salário por hora é: "+pordia()+" por hora"
      
}



    function pormes(){

        return(document.getElementById("salarioMes").value/document.getElementById("horasTrabalhoMes").value)
    }

    function pordia(){
        return(document.getElementById("salarioMes").value/(document.getElementById("horasTrabalhoDia").value*document.getElementById("diasTrabalhoSemana").value*4))
    }
}