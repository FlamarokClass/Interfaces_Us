/* PROMESAS:
Convertir la siguiente función de callbacks a promesas.
function leerArchivo(callback) {
setTimeout(() => {
callback('Contenido del archivo');
}, 1000);
}

leerArchivo((contenido) => {
console.log(contenido);
}); 
*/
function leerArchivo() {
    return new Promise ((res, _) => {
        setTimeout(() => {
            res('Contenido del archivo')
        }, 1000);
    });
}

leerArchivo
    .then((contenido) => {
        console.log(contenido)
    });

/*   ASYNC-AWAIT
  Crea una función obtenerDatos que devuelva una promesa. La promesa debe
    rechazar después de 1 segundo con el mensaje "Error al obtener datos". Luego,
    utiliza async y await para llamar a esta función, maneja el error con try y catch
    y muestra el mensaje de error en la consola. */

const obtenerDatos =  () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('Error al obtener datos');
        },1000);
    })
}

async function ejecutarObtenerDatos() {
    try {
    let datos = await obtenerDatos();
    console.log(datos);
    } catch (error) {
    console.error('Se produjo un error:', error);
    }
}

ejecutarObtenerDatos();

/* 
Crea tres funciones tareaUno, tareaDos y tareaTres que devuelvan promesas.
Cada promesa debe resolverse después de 2 segundos con el mensaje "Tarea
Uno completada", "Tarea Dos completada" y "Tarea Tres completada"
respectivamente. Luego, utiliza Promise.all y async/await para llamar a estas
funciones en paralelo y mostrar los mensajes en la consola.
*/

const tareaUno = () =>{
    return new Promise((resolve, _) => {
        setTimeout(() => {resolve(console.log("Tarea 1 completada"))}, 1000)
    })
}

const tareaDos = () =>{
    return new Promise((resolve, _) => {
        setTimeout(() => {resolve(console.log("Tarea 2 completada"))}, 1000)
    })
}

const tareaTres = () =>{
    return new Promise((resolve, _) => {
        setTimeout(() => {resolve(console.log("Tarea 3 completada"))}, 1000)
    })
}

// 2. Función principal que ejecuta las tareas en paralelo
const ejecutarTareas = async () => {
  try {
    console.log("Iniciando todas las tareas en paralelo...");
    
    // Ejecutar todas las promesas en paralelo con Promise.all
    const resultados = await Promise.all([
      tareaUno(),
      tareaDos(),
      tareaTres()
    ]);
    
    // Mostrar los resultados
    resultados.forEach((mensaje, index) => {
      console.log(`${index + 1}: ${mensaje}`);
    });
    
    console.log("Todas las tareas han sido completadas!");
  } catch (error) {
    console.error("Error al ejecutar las tareas:", error);
  }
};

// 3. Llamar a la función principal
ejecutarTareas();
