let estatura = document.getElementById("estatura")
let peso = document.getElementById("peso")
let resultado = document.getElementById("resultado")
let hacerCalculo = document.getElementById("botonCalculo")

hacerCalculo.addEventListener("click", calculoMasaCorporal)

function calculoMasaCorporal(){
    let division = parseFloat(peso.value)/parseFloat(estatura.value)
    resultado.innerText = division
}