datosTransaccion = [];

const clUsTasa = 948;
const usClTasa = 1/948;

function convertirDivisa (tipoDeCambio, cantidadDinero) {
    if (tipoDeCambio == 'cl-Us') {
        return cantidadDinero * clUsTasa;
    } else {
        return cantidadDinero * usClTasa;
    }
}

formulario.addEventListener("submit", event=>{
    event.preventDefault()
    let nombreCliente = document.getElementById("nombre")
    let numIdentificacion = document.getElementById("identificacion")
    let cantidadDinero = document.getElementById("cantidad")
    let formulario = document.getElementById("formulario")

    if (nombreCliente.value =''){
        const span = document.createElement("span")
        span.innerText = "Ingrese un nombre valido"
        formulario.appendChild(span)
    }

    if ((parseInt(numIdentificacion.value) ==  0) || Number.isNaN(parseInt(numIdentificacion.value))){
        const span = document.createElement("span")
        span.innerText = "Ingrese numero de identificacion valido"
        formulario.appendChild(span)
    }

    if ((parseInt(cantidadDinero.value) ==  0) || Number.isNaN(parseInt(cantidadDinero.value))){
        const span = document.createElement("span")
        span.innerText = "Ingrese numero de identificacion valido"
        formulario.appendChild(span)
    }



    let tipoDeCambio = document.querySelector('input[name="tipo-cambio"]:checked').value;



    let divisaConvertida = convertirDivisa(tipoDeCambio, parseInt(cantidadDinero.value));
    
    const span = document.createElement("span")
    span.innerText = `El dinero a entregar es: ${divisaConvertida.toFixed(2)}`
    formulario.appendChild(span)

    
    let datosGuardados = {
        nombreCliente: nombreCliente.value,
        numIdentificacion:numIdentificacion.value,
        cantidadDinero: parseInt(cantidadDinero.value),
        divisaConvertida: parseInt(divisaConvertida),
    }
    datosTransaccion.push(datosGuardados)

    console.log(datosTransaccion)

    localStorage.setItem('Datos', JSON.stringify(datosGuardados));

})

