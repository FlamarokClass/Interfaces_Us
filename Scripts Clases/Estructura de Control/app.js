alert("Hola Mundo", "Prueba");
console.log("Hola Mundo");
let nombre = "Juan";
let nombre2, apellido, edad;
apellido = "Perez";
edad = 30;
nombre2 = "Julian";
console.log(nombre);
console.log(nombre2);   

// Actividad Objeto
let harina = {
    nombre : "Harina",
    id : 1,
    marca: "Santa Ana",
    precio: 3500
};

let aceite = {
    nombre : "Aceite",
    id : 2,
    marca: "Girasol",
    precio: 3800
};

let arroz = {
    nombre : "Arroz",
    id : 3,
    marca: "Carrefour",
    precio: 2000
};

let agua = {
    nombre : "Agua",
    id :2,
    marca: "VillaManaos",
    precio: 2500
};

let Tienda = {
    nombre: "Aconcagua",
    direccion: {
        calle: "Av. San Martin 123",
        localidad: "Mendoza"
    },
    productos: [harina, aceite, arroz, agua]
};
// Otra manera
const Tienda2 = {
    nombre: "Carrefour",
    direccion: {
        calle: "Av. San Martin 245",
        localidad: "Corrientes"
    },
    productos: [
        {id:1,
        nombre: "Harina",
        marca: "Santa Ana",
        precio: 3500},
        {id:2,
        nombre: "Aceite",
        marca: "Girasol",
        precio: 3800},
        {id:3,
        nombre: "Arroz",
        marca: "Carrefour",
        precio: 2000},
        {id:4,
        nombre: "Agua",id :2,
        marca: "VillaManaos",
        precio: 2500 }
    ]
};

// otra manera con Constructor
function Producto(nombre, id, marca, precio){
    this.nombre = nombre;
    this.id = id;
    this.marca = marca;
    this.precio = precio;
};
   
console.log(Tienda.productos[0].marca);
console.log(Tienda.productos[0].precio);

// FUNCIONES
function sumar(a, b){
    return a + b;
};

let saludar = function(nombre){
    return "Hola " + nombre;
}

// arrow function
let restar = (a, b) => a - b; // o tambien let restar = (a, b) => {return a - b};
// si no hay parametros:
saludar2 => {"Hola Mundo"};

// Definir e invocar
((nombre) => "Hola " + nombre)("Juan")(); // el ultimo parentesis hace que ejecute el codigo entre parentesis
