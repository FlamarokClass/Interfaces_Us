// PROMESA
let promesa = new Promise((resolve, reject) => {
  let exito = true;
  setTimeout(() => {
    if (exito) {
      resolve('Operacion exitosa');
    } else {
      reject('Operacion Fallida');
    }
  }, 2000);
});

promesa
  .then((mensaje) => {
    // este mensaje es proveniente del resolve, será lo indicado qué se hará alli
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });

// EJEMPLO!!!:

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


// ENCADENAMIENTO DE PROMESAS
// no colocamos reject porque no necesitamos ni habrá errores en este ejemplo
function pasoUno() {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      console.log('Paso Uno');
      resolve();
    }, 1000);
  });
}

function pasoDos() {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      console.log('Paso Dos');
      resolve();
    }, 1000);
  });
}

function pasoTres() {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      console.log('Paso Tres');
      resolve();
    }, 1000);
  });
}

pasoUno()
  .then(pasoDos)
  .then(pasoTres)
  .then(() => {
    console.log('Todos los pasos completados');
  });

// ERROR CATCH:
let promesa2 = new Promise((resolve, reject) => {
  reject('Error en la operación.');
});
promesa2
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error('Se produjo un error: ' + error);
  });

  // consola: Se produjo un error: Error en la operación.