function verificarIMC(){

var peso = document.getElementById("peso").value
var altura = document.getElementById("altura").value

var imcQuebrado = parseInt(peso)/(parseFloat(altura)*parseFloat(altura))

var imcFinal = imcQuebrado.toFixed(2)


if(imcFinal<17){

    document.getElementById("res").innerHTML= imcFinal+": Você está muito abaixo do peso"
}else if(imcFinal>17&&imcFinal<18.49){
    document.getElementById("res").innerHTML = imcFinal+": Você está abaixo do peso"
}else if(imcFinal>18.5&&imcFinal<24.99){
    document.getElementById("res").innerHTML = imcFinal+ ": Parabéns, você está no peso ideal"
}else if(imcFinal>25&&imcFinal<29.99){
    document.getElementById("res").innerHTML = imcFinal+ ": Você está acima do peso"
}else if(imcFinal>30&&imcFinal<34.99){
    document.getElementById("res").innerHTML = imcFinal+ ": Você está obeso"
}else if(imcFinal>35){
    document.getElementById("res").innerHTML = imcFinal+ ": Cuidado! Você está com obesidade mórbida"
}
}