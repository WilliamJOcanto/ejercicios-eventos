let inputTexto = document.getElementById("entradaTexto")
let divTexto = document.getElementById("divInput")
let elementoParrafo = document.createElement("p")
let reset = document.getElementById("botonReset")

divTexto.appendChild(elementoParrafo)


inputTexto.addEventListener("input", evento => {
    let valueEvento = evento.target.value;
    mostrarTexto(valueEvento);
});

function mostrarTexto(value){
    elementoParrafo.classList.add("h-96", "w-4/5", "whitespace-pre-wrap", "break-words");
    elementoParrafo.innerText = value;
    return elementoParrafo
}

reset.addEventListener("click", borrandoDiv)

function borrandoDiv(){
    elementoParrafo.innerText = ""
}
