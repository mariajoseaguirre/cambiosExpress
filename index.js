
let nombreCliente= prompt ( ' Bienvenidos a Cambios Express \n Ingrese nombre y apellido');

while (nombreCliente == ''){
    alert ('Por favor ingresar nombre y apellido');
    nombreCliente = prompt ('Bienvenidos a Cambios Express \nIngrese nombre y apellido');
}

// Defino y asigno el tipo de cambio que desea por un numero.
const ClUs = '1';
const UsCl = '2';
let tipoDeCambio = prompt ('Hola '+ nombreCliente +' ingrese el numero tipo de cambio que desea \n' + ClUs + ' Cambio Peso Chileno a Dolar \n' + UsCl + ' Cambio Dolar a Peso Chileno');

while  ((tipoDeCambio !== ClUs) && (tipoDeCambio !== UsCl)){
    alert ('Por favor ingrese una opcion valida \n Ej: 1');
    tipoDeCambio = prompt('Ingrese el numero tipo de cambio que desea \n' + ClUs + ' Cambio Peso Chileno a Dolar \n' + UsCl + ' Cambio Dolar a Peso Chileno ')
}


let cantidadDinero = parseFloat (prompt ('Ingrese cantidad de dinero a cambiar:'))

while (Number.isNaN (cantidadDinero) || cantidadDinero === 0) {
    alert ('Ingrese cantidad valida');
    cantidadDinero = parseFloat (prompt ('Ingrese cantidad de dinero a cambiar:'));
}

function convertirDivisa (tipoDeCambio, cantidadDinero) {
    const tasaUsCl = 948;
    if (tipoDeCambio == ClUs) {
        return cantidadDinero / tasaUsCl;
    } else {
        return cantidadDinero * tasaUsCl;
    }
}

const divisaConvertida =  convertirDivisa (tipoDeCambio,cantidadDinero);

alert ('Estimado: '+nombreCliente +' la cantidad de dinero a entregar es: $' + divisaConvertida);