const nuevosPrecios = [
    { producto: "Pan", precio: 120 },
    { producto: "Leche", precio: 220 },
    { producto: "Queso", precio: 330 }
];

const listado = document.querySelectorAll('#lista-productos li')
console.log(listado)

listado.forEach(itemLi => {
    const texto = itemLi.textContent
    const nombreProducto = texto.split(" - ")[0] // Split separa la cadena y toma el indice cero ej: Pan
    const productoFinal = nuevosPrecios.find(productoABuscar => productoABuscar.producto === nombreProducto)
    if(productoFinal){
        const precio = productoFinal.precio
        itemLi.textContent = ` ${nombreProducto} - $${precio}`
    }
})

