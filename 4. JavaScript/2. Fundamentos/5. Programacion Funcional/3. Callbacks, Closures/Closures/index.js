/*function inicializa() {
    var prop = 42 // variable local creada por la funcion inicializa
    function mostrarProp() {
        // funcion interna closure
        alert(prop)
    }
    mostrarProp()
}
inicializa()


// esta funcion es utilizada en el patrón Módulo

*/

var calculadora = (function(num1, num2) {
    var resultado = 0

    function actualizarRtado(nuevoRtado) {
        resutlado = nuevoRtado
    }
    return {
        sumar: function() {
            var resultado = num1 + num2
            actualizarRtado(resultado)

        },
        restar: function() {
            var resultado = num1 - num2
            actualizarRtado(resultado)

        },
        multiplicar: function() {
            var resultado = num1 * num2
            actualizarRtado(resultado)

        },
        dividir: function() {
            var resultado = num1 / num2
            actualizarRtado(resultado)

        },
        resultado: function() {
            return resultado
        }
    }
})(2, 4)