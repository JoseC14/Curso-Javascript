function verificarIMC(){

var peso = document.getElementById("peso").value
var altura = document.getElementById("altura").value

var imc = parseInt(peso)/(parseFloat(altura)*parseFloat(altura))

if(imc<17){

     alert (imc+" Você está Muito abaixo do peso")
}else if(imc>17&&imc<18.49){
     alert (imc+" Você está abaixo do peso")
}else if(imc>18.5&&imc<24.99){
    alert (imc+ " Parabéns, você está no peso ideal")
}else if(imc>25&&imc<29.99){
    alert (imc+ " Você está acima do peso")
}else if(imc>30&&imc<34.99){
    alert (imc+ " Você está obeso")
}else if(imc>35){
    alert (imc+ " Cuidado! Você está com obesidade mórbida")
}
}