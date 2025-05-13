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