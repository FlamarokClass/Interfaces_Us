const filtrarProductos = (array, valor, categoria) => {
    array.filter(producto => producto.precio == valor && producto.categoria == categoria)
};

const producto = {
    nombre: "Mouse",
    stock:5,
    aumentarStock : function (cantidad){
        this.stock += cantidad;
    }
}


const persona = {
    nombre: "Lucía",
    saludar: () => {
    console.log(`Hola, soy ${this.nombre}`);
    }
};
persona.saludar();

// POR CONSOLA MUESTRA: Hola, soy Undefined (Ya que las arrow function no tiene this. 
// y por el Scope de la variable)


// Ejercicio 4:
const ordenarEmpleado = (array, edadMinima) => {
    const nuevoArray = array.map( empleado => {
        if (empleado.edad >= edadMinima) {
            empleado.salario *= 1.10
        }
        return empleado
    })
    return nuevoArray.sort((a,b) => b.salario - a.salario)
}

// Opcion2
const ordenarEmpleado2 = (array, edadMinima = 30) => {
    return array
        .map(empleado => ({
            salario: empleado.edad >= edadMinima ? empleado.salario * 1.10 : empleado.salario
        }))
        .sort((a, b) => b.salario - a.salario);
};

const empleados = [
    { nombre: "Juan", edad: 25, salario: 30000 },
    { nombre: "María", edad: 35, salario: 40000 },
    { nombre: "Pedro", edad: 28, salario: 35000 }
];

console.log(ordenarEmpleado(empleados, 30));

// Ejercicio 5:

const gestionarTareas = (tareas) => {
    const hoy = new Date();
    return tareas.filter(tarea => 
        tarea.completada == false && 
        new Date(tarea.fechaLimite) >= hoy
    );
};

const tareas = [
    {
      titulo: "Hacer informe",
      fechaLimite: "2025-11-30",
      completada: false
    },
    {
      titulo: "Revisar código",
      fechaLimite: "2023-10-15", // Fecha pasada
      completada: false
    },
    {
      titulo: "Enviar correo",
      fechaLimite: "2024-12-01",
      completada: true // Tarea completada
    }
  ];
  
  console.log(gestionarTareas(tareas));

// Ejercicio 6:

class Carrito {
    constructor() {
        this.productos = []
    }

    set agregarProducto(producto) {
        this.productos.push(producto);
    }
    
    set eliminarProducto(producto) {
        this.productos.pull(producto);
    }

    get calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0)
    }
    
}