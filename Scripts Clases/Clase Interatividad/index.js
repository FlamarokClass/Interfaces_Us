const titulo = document.getElementById("titulo");
const parrafos = document.getElementsByClassName("parrafo");
const parrafos2 = document.getElementsByTagName("p");


const parrafoRojo = document.querySelector("p")
const parrafoDiv= document.querySelector("div p")
const allParraforDiv = document.querySelectorAll("div p")

console.log(parrafos)

titulo.textContent = "Interfaces de usuario"

titulo.innerHTML = `Unahur 
    <span> Interfaces de Usuario </span>
    <span> Interfaces de Usuario </span>
    <span> Interfaces de Usuario </span>
` // Hago esto de multiples lineas gracias al backstick: `

titulo.style.backgroundColor = "red"

titulo.setAttribute("id", "Nuevo valor")


// EVENTOS
/* function cambiarColor(color) {
    document.body.style.backgroundColor = color
}

const boton = document.getElementById('miBoton');
boton.addEventListener('click', function() { // Funcion anonima indicado al boton
    cambiarColor(rojo)
})

document.getElementById('miBoton').addEventListener('click', function(){  // Funcion anonima buscando el boton en el html
    alert('!Boton clickeado buscando boton');
})

document.getElementById('miBoton').addEventListener('click', () => {  // arrow function buscando el boton en el html
    alert('!Boton clickeado con arrow Function');
})

 */

// Presionar boton y cambiar color del parrafo

document.getElementById('miBoton').addEventListener('click', function() {
    let parrafoACambiar = document.getElementById("TextoEvento")
    parrafoACambiar.textContent = "Texto Modificado con evento"
})