// para recuperar los datos de los campos (labels) uso los llamados

const primerNumero = document.getElementById('num-uno')
const segundoNumero = document.getElementById('num-dos')
const operacion = document.getElementById('operacion')
const resultado = document.getElementById('resultado')
let valorResultado 

const calcular = () => {
    const valor1 = parseFloat(primerNumero.value) // hacemos value porque si fuera solo la constante trae el objeto entero, no solo el detao
    const valor2 = parseFloat(segundoNumero.value)
    const operador = operacion.value
    
    if(isNaN(valor1) || isNaN(valor2)){
    // opcion 1: alert('Ingresar ambos números válidos')
        resultado.textContent = 'Ingresar ambos números validos'
        return
    }
    switch (operador) {
        case '+':
            valorResultado = valor1 + valor2
            break;
        case '-':
            valorResultado = valor1 - valor2
            break;
        case '*':
            valorResultado = valor1 * valor2
            break;
        case '/':
            valorResultado = valor2 === 0 ? 'Error: No se puede dividir por 0' : valor1/valor2
            if ( valor2 ===0) {
                valorResultado = 'Error: No se puede dividir por 0'
            } else{
                valorResultado = valor1 / valor2
            }
            break;
        default:
            valorResultado = 'Operacion Invalida'
        }
       
    resultado.textContent = valorResultado
}


primerNumero.addEventListener('input', calcular ) // tambien esta el evento change necesito cambiar campo y hacer click fuera
segundoNumero.addEventListener('input',calcular )// con el imput es automaticamente el cambio
operacion.addEventListener('input', calcular)