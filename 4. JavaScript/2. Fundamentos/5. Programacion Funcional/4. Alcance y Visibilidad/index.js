/*function crearTexto() {
    var texto = "hola soy yo"
}
crearTexto()
alert(texto)



var texto = "Hola variable gobal"

function crearTexto() {
    alert(texto)
}

function unafuncion() {
    var x = 40
    otrafuncion()
} */

var suma = 0;
var resta = 0;
var multiplicacion = 0;
var valor1 = 1246;


function calcularSuma() {
    // var valor1 = 1246;
    var valor2 = 3456;
    suma = valor1 + valor2;
    return suma;
}

function calcularMultiplicacion() {
    var valor3 = 3457;
    var valor4 = 8795;
    multiplicacion = valor3 * valor4;
    return multiplicacion;
}

(function() {
    resta = calcularMultiplicacion() - calcularSuma() + valor1;
    var mensaje = "El resultado de la resta: ";
    alert("1. " + calcularSuma(), "2. : " + calcularMultiplicacion());
})