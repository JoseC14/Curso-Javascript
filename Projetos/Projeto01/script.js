function enviarDados(){
        
    var nome=document.getElementById("name")
    var age=document.getElementById("age")
    var salario=document.getElementById("salary")
    var size=nome.lenght
     

      if(size>3){
          alert("Enviado!")
      }else{
          alert("ERRO! nome inválido")
      }

      if(idade>0&&idade<150){
          alert("Enviado!")
      }else{
          alert("ERRO! idade inválida")
      }

      if(salario>0){
          alert("Enviado")
      }else{
          alert("ERRO! salário inválido")
      }
}