let contenedorColor = document.getElementById("divColor")
let textoColor = document.getElementById("nombreColor")
let botonChange = document.getElementById("boton")

botonChange.addEventListener('click', cambiandoColorFondo)

let colores = ["bg-blue-500", "bg-pink-500"]
let indiceDeColores = 0

function cambiandoColorFondo(){
    if(indiceDeColores === 0){
        contenedorColor.classList.remove("bg-gray-700")
        contenedorColor.classList.add(colores[indiceDeColores]) 
        indiceDeColores = 1
    }else if(indiceDeColores === 1){
        contenedorColor.classList.remove(colores[indiceDeColores-1])
        contenedorColor.classList.add(colores[indiceDeColores]) 
        indiceDeColores = 2
    }else{
        contenedorColor.classList.remove(colores[indiceDeColores-1])
        contenedorColor.classList.add("bg-gray-700")
        indiceDeColores = 0
    }
    console.log("ocurre click");
    console.log(indiceDeColores);
}


 // botonChange.removeEventListener("click", cambiandoColorFondo)