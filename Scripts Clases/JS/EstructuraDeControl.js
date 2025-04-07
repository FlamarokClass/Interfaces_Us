// ESTRUCTURAS DE CONTROL:
// IF ELSE
function verificarNumero(numero) {
    if (numero > 0) {
            console.log("El número es positivo.");
        } else if (numero < 0) {
            console.log("El número es negativo.");
        } else {
            console.log("El número es cero.");
    }
    if (numero % 2 === 0) {
        console.log("El número es par.");
    }
    else {
        console.log("El número es impar.");
    }
}
    
    // Ejemplo de uso
    verificarNumero(5);  // El número es positivo.
    verificarNumero(-3); // El número es negativo.
    verificarNumero(0);  // El número es cero.
let n = 22
console.log( n % 2 === 0 ? "Es Par" : "No es par") 


// WHILE
arreglo = [1,2,3,4,5,6,7,8,9,10]
let contador = 0;
while(contador < arreglo.length){
    console.log(arreglo[contador]);
    contador++;
}

// DO WHILE
do{
    console.log(arreglo[contador]);
    contador++;
}
while(contador < arreglo.length);

// FOR:
for(let i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]);
}

// FOR OF:
// Iterar sobre un arreglo
let unstring="Hola";
for(let letra of unstring){
    console.log(letra);
}

// FOR IN:
// Iterar sobre un objeto
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

for(let propiedad in persona){
    console.log(propiedad);
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

// OBJETO:
let persona2 = new Object();
persona2.nombre = "Juan";
persona2.edad = 30;
persona2.esEmpleado = true;
persona2.trabajos = [{}, {}];
persona2.trabajos[0].descripcion =  "Desarrollador";// es un objeto
persona2.trabajos[0].empresa =  "Google";
persona2.trabajos[1].descripcion =  "Diseñador";
persona2.trabajos[1].empresa =  "Facebook";

for (let clave in persona2){
    if (clave === "trabajos"){ // mostrara el array
        for (let trabajo of persona2.trabajos){ // o persona2[clave]
            console.log(`Trabajo: ${trabajo.descripcion} en ${trabajo.empresa}`);
            console.log(trabajo);
        }
    } else{
        console.log(`${clave}: ${persona2[clave]}`);
    }
}

// BREAK
let nombres = ["Juan", "Pedro", "Maria", "Ana"];
let buscado = "Ana";
for(let nombre of nombres){
    if(nombre === buscado){
        console.log("Nombre encontrado");
        break;
    } else
    console.log(`Nombre no encontrado: ${nombre}, continua buscando...`);
}

// CONTINUE
let edades = [0, 18, 20, undefined, 25, 30, 15, null, 17];
for(let edad of edades){
    if(edad === undefined || edad === null || edad === 0){
        continue; // Salta a la siguiente iteración
    }
    console.log(`Edad Válida: ${edad}`);
}

console.log("EJERCICIO 1: FILTRAR PRODUCTOS DESTACADOS CON STICK");

const productos = [
    { nombre: "Auriculares", precio: 12000, stock: 5, destacado: true },
    { nombre: "Mouse", precio: 5000, stock: 0, destacado: true },
    { nombre: "Teclado", precio: 8000, stock: 3, destacado: false },
    { nombre: "Monitor", precio: 40000, stock: 2, destacado: true },
    { nombre: "Webcam", precio: 10000, stock: 0, destacado: false },
    { nombre: "Notebook", precio: 150000, stock: 1, destacado: true }
  ];

function filtrarProductosDestacados(productos) {
    const productosFiltrados = [];
    for(let producto of productos){
        if(producto.destacado && producto.stock > 0){
            productosFiltrados.push(producto);
        }
    }
    return productosFiltrados;
}

//Spread operator (Copiar objetos)
const persona3 = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    saludar: function(){
        console.log(`Hola, soy ${this.nombre}`);
    }
};
persona.saludar(); // Llamar al método saludar

const persona4 = {...persona3}; // Copia de referencia
console.log(persona4); // { nombre: "Juan", edad: 30, ciudad: "Madrid" }
persona4.nombre = "Pedro"; // Cambiamos el nombre de la copia
console.log(persona3); // { nombre: "Juan", edad: 30, ciudad: "Madrid" }
console.log(persona4); // { nombre: "Pedro", edad: 30, ciudad: "Madrid" }


//METODOS DE ARRAY
//PUSH
let numeros = [1, 2, 3];
numeros.push(4); // Agrega 4 al final del array
console.log(numeros); // [1, 2, 3, 4]
//POP
numeros.pop(); // Elimina el último elemento del array
console.log(numeros); // [1, 2, 3]
// FOR EACH
let acumulador = 0;
numeros.forEach((numero)=>{
    console.log(numero);
    acumulador += numero; // Sumar cada elemento al acumulador
    //numero es una variable de iteracion que contiene el valor del elemento actual en cada iteracion
});
//MAP
let numerosCuadrados = numeros.map((numero) => {
    return numero * numero; // Eleva al cuadrado cada elemento
});

//let numerosCuadrados = numeros.map(numero => numero * numero); // Forma abreviada

// FILTER
let numerosFiltrados = numeros.filter((numero) => {
    return numero > 2; // Filtra los números mayores a 2
});
//let numerosFiltrados = numeros.filter(numero => numero > 2); // Forma abreviada

//EJERCICIO 2: FILTRAR PRODUCTOS 
console.log("EJERCICIO 2: FILTRAR PRODUCTOS");
const productosfiltrados = productos.filter(producto => producto.destacado && producto.stock > 0);