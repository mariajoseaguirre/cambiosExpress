datosTransaccion = [];


function convertirDivisa (tipoDeCambio, cantidadDinero) {
    if (tipoDeCambio == clUs.opcion) {
        return cantidadDinero * clUs.tasaCambio;
    } else {
        return cantidadDinero * usCl.tasaCambio;
    }
}

let nombreCliente = document.getElementById("nombre")
let numIdentificacion =parseInt(document.getElementById("identificacion"))
let cambioClUs = document.getElementById("cl-us")
let cambioUsCl = document.getElementById ("us-cl")
let cantidadDinero = document.getElementById("cantidad")
let formulario = document.getElementById("formulario")


formulario.addEventListener("submit", event=>{
    event.preventDefault()
    if (nombreCliente.value == ''){
        const span = document.createElement("span")
        span.innerText = "Ingrese un nombre valido"
        formulario.appendChild(span)
    }

    if (numIdentificacion.value ==  0) {
        const span = document.createElement("span")
        span.innerText = "Ingrese numero de identificacion valido"
        formulario.appendChild(span)
    }

    let divisaConvertida = convertirDivisa(tipoDeCambio, cantidadDinero);
 
    switch (tipoDeCambio) {
      case "cambioClUs":
        break;
      case "cambioUsCl":
        break;
      default:
        const span = document.createElement("span")
        span.innerText = "Ingrese una opcion"
        formulario.appendChild(span)
        break;
    }



    
    let datosGuardados = {
        nombreCliente: nombreCliente,
        numIdentificacion:numIdentificacion,
        cantidadDinero: cantidadDinero,
        divisaConvertida: divisaConvertida,
    }
})
