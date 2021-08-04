function validarNota(){

var nota1=document.getElementById("nota1").value
var nota2=document.getElementById("nota2").value
var nota3=document.getElementById("nota3").value
var nota4=document.getElementById("nota4").value

var res1=nota1
var res2=parseInt(nota1)+parseInt(nota2)
var res3=parseInt(nota1)+parseInt(nota2)+parseInt(nota3)
var res4=parseInt(nota1)+parseInt(nota2)+parseInt(nota3)+parseInt(nota4)

var media1=res1/1
var media2=res2/2
var media3=res3/3
var media4=res4/4

var restante1=24-res1
var restante2=24-res2
var restante3=24-res3
var restante4=24-res4

var devendo1=res1-6
var devendo2=res2-12
var devendo3=res3-18
var devendo4=res4-24

var outputResult = document.getElementById("outputResult")
var outputMedia = document.getElementById("outputMedia")
var outputDevendo = document.getElementById("outputDevendo")

if(res4>=24){
    outputResult.textContent = "Você ja passou"
    outputMedia.textContent = "Sua média é: "+media4
}else if(nota2=""||nota3===""||nota4===""){
       outputResult.textContent = "Falta "+restante1+" pra você passar"
       outputMedia.textContent = "Sua média é : "+media1
  }else if(nota3=""||nota4===""){
       outputResult.textContent = "Falta "+restante2+" pra você passar"
       outputMedia.textContent = "Sua média é "+media2
   }else if(nota4=""){
       outputResult.textContent = "Falta "+restante3+" pra você passar"
       outputMedia.textContent = "Sua média é: "+media3
 }else if(res4<=24){
       outputResult.textContent = "Falta "+restante4+" pra você passar"
       outputMedia.textContent =  "Sua média é: "+media4
 }
 if(res1<6){
       outputDevendo.textContent = "Você está devendo"+devendo1
 }else if(res2<12){
       outputDevendo.textContent = "Você está devendo "+devendo2
 }else if(res3<18){
       outputDevendo.textContent = "Você está devendo "+devendo3
 }else if(res4<24){
       outputDevendo.textContent = "Você está devendo "+devendo4
 }
}
