let datosJson;
fetch('persona.json')
  .then((res) => res.json())
  .then((salida) => {
    datosJson = salida;
    let elementoTexto = document.getElementById('miDiv');
    elementoTexto.textContent = datosJson.name;
  });

// Ejemplo de una Solicitud GET:

fetch('https://api.example.com/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        'Error en la respuesta del servidor. Ver detalle:' + response.statusText
      );
    }
    return response.json(); // Parsear la respuesta como JSON
  })
  .then((data) => {
    console.log(data); // Manejar los datos recibidos
  })
  .catch((error) => {
    console.error('Error Inesperado:', error);
  });

/*   
• fetch('https://api.example.com/data') realiza una solicitud GET
a la URL especificada.
• response.ok verifica si la respuesta fue exitosa (estado HTTP 200-299).
• response.json() convierte la respuesta en un objeto JavaScript.
• El primer then maneja la conversión de la respuesta.
• El segundo then maneja los datos recibidos.
• catch captura y maneja cualquier error que ocurra durante la
solicitud. 
*/

// ASYNC / AWAIT + FETCH

/* 
fetch('https://api.example.com/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        'Error en la respuesta del servidor. Ver detalle:' + response.statusText
      );
    }
    return response.json(); // Parsear la respuesta como JSON
  })
  .then((data) => {
    console.log(data); // Manejar los datos recibidos
  })
  .catch((error) => {
    console.error('Error Inesperado:', error);
  }); 
*/

async function obtenerUsuarios() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(
        'Error en la respuesta del servidor. Ver detalle: ' + response.status
      );
    }
    const data = await response.json();
    console.log(data); // Manejar los datos recibidos
  } catch (error) {
    console.error('Error inesperado:', error);
  }
}
