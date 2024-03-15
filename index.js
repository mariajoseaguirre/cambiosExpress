let datosTransaccion = [];

// Defino y asigno el tipo de cambio que desea por un numero.
class Moneda {
    constructor (opcion, monedaARecibir,monedaAEntregar, tasaCambio){
    this.opcion = opcion;
    this.monedaARecibir = monedaARecibir;
    this.monedaAEntregar = monedaAEntregar;
    this.tasaCambio = tasaCambio;
    }
}
const clUs = new Moneda ('1', 'Pesos Chilenos', 'Dolares Americanos', 1/948)
const usCl = new Moneda ('2', 'Dolares Americanos', 'Pesos Chilenos', 948)


function convertirDivisa (tipoDeCambio, cantidadDinero) {
    if (tipoDeCambio == clUs.opcion) {
        return cantidadDinero * clUs.tasaCambio;
    } else {
        return cantidadDinero * usCl.tasaCambio;
    }
}

let inicio = prompt ("¿Desea realizar un cambio? O ESC para salir" ).toUpperCase

while (inicio !== 'ESC') {

    let nombreCliente= prompt ( ' Bienvenidos a Cambios Express \n Ingrese nombre y apellido');
    
    while (nombreCliente == ''){
        alert ('Por favor ingresar nombre y apellido');
        nombreCliente = prompt ('Bienvenidos a Cambios Express \nIngrese nombre y apellido');
    }

    let numIdentificacion= parseInt(prompt ( 'Ingrese su numero de identificacion sin puntos y sin guiones'));

    while ((Number.isNaN (numIdentificacion) || numIdentificacion === 0) ){
        alert ('Por favor ingrese numero de identificacion');
        numIdentificacion = prompt ('Ingrese su numero de identificacion');
    }


    let tipoDeCambio = prompt (`Hola ${nombreCliente} ingrese el numero tipo de cambio que desea: \n${clUs.opcion} - Pesos Chilenos a Dolar americano \n${usCl.opcion} - Dolar Americano a Peso Chileno`);


    while  ((tipoDeCambio !== clUs.opcion) && (tipoDeCambio !== usCl.opcion)){
        alert ('Por favor ingrese una opcion valida \n Ej: 1');
        tipoDeCambio = prompt('Ingrese el numero tipo de cambio que desea \n' + clUs.opcion + ' Cambio Peso Chileno a Dolar \n' + usCl.opcion + ' Cambio Dolar a Peso Chileno ')
    }


    let cantidadDinero = parseFloat (prompt ('Ingrese cantidad de dinero a cambiar:'))

    while (Number.isNaN (cantidadDinero) || cantidadDinero === 0) {
        alert ('Ingrese cantidad valida');
        cantidadDinero = parseFloat (prompt ('Ingrese cantidad de dinero a cambiar:'));
    }


    let divisaConvertida =  convertirDivisa (tipoDeCambio,cantidadDinero);

    if (tipoDeCambio==clUs.opcion) {
        alert (`Estimado: ${nombreCliente} la cantidad de dinero a entregar es: $ ${divisaConvertida.toFixed(2)} ${clUs.monedaAEntregar}`);
    } else {
        alert (`Estimado: ${nombreCliente} la cantidad de dinero a entregar es: $ ${divisaConvertida.toFixed(2)} ${usCl.monedaAEntregar}`);
    }


    let datosGuardados = {
        nombreCliente: nombreCliente,
        numIdentificacion:numIdentificacion,
        cantidadDinero: cantidadDinero,
        divisaConvertida: divisaConvertida,
    }
    datosTransaccion.push(datosGuardados)


    //Se hace console.log para tener la informacion del cliente 
    console.log(datosTransaccion)

    inicio = prompt("¿Desea realizar un cambio? O ESC para salir" ).toUpperCase
}

let nombreClientesDia = datosTransaccion.map ((datoGuardado)=>{
    return datoGuardado.nombreCliente
})

console.log (nombreClientesDia)