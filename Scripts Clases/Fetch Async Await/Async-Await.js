const miFuncion =  async () => {
  let promesa = new Promise((resolve) => {
    setTimeout(() => resolve('Hola'), 2000);
  });
  let resultado = await promesa; // Espera hasta que la promesa se resuelve
  console.log(resultado); // 'Hola'
}

miFuncion();


async function procesarDatos() {
    try {
        let datos = await obtenerDatos();
        console.log(datos);
    } catch (error) {
    console.error('Error al obtener datos:', error);
    }
}

// Función asíncrona que simula una petición a una API
async function obtenerDatosDeAPI() {
    // Simulamos un retraso de red
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulamos un error aleatorio (50% de probabilidad)
    if (Math.random() > 0.5) {
      throw new Error('Error: Fallo en la conexión con la API');
    }
    
    // Si todo va bien, retornamos datos
    return { id: 1, nombre: 'Ejemplo de datos' };
  }
  
  // Función principal que usa try-catch con async/await
  async function mostrarDatos() {
    try {
      console.log('Iniciando petición a la API...');
      
      // Esperamos a que la promesa se resuelva
      const datos = await obtenerDatosDeAPI();
      
      // Esto solo se ejecuta si no hubo error
      console.log('Datos recibidos:', datos);
      document.getElementById('resultado').textContent = `Nombre: ${datos.nombre}`;
      
    } catch (error) {
      // Manejo de errores
      console.error('Algo falló:', error.message);
      document.getElementById('resultado').textContent = error.message;
      document.getElementById('resultado').style.color = 'red';
      
    } finally {
      // Este bloque siempre se ejecuta (opcional)
      console.log('Petición finalizada');
    }
  }
  
  // Llamamos a la función
  mostrarDatos();