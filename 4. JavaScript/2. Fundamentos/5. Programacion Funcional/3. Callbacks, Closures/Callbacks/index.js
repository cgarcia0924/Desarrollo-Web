/*var calculadora = (function(num1, num2) {
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
function aviso(mensaje) {
    alert(mensaje)
}

function OperacionLarga(param1, param2, aviso) {
    aviso("Terminó de realizar las operaciones")
}

//----------------

function EjecutarProceso(miCallback) {
    miCallback("Devolviendomensaje")
}

EjecutarProceso(function(valorDevuelto) {
    console.log("Termino de hacer la tarea" + valorDevuelto)
})*/
//----------------

function uno(mensaje) {
    alert(mensaje)
}

function dos(mensaje) {
    alert(mensaje)
}

function tres(mensaje) {
    alert(mensaje)
}

function funcionCompleja(callback1, callback2, callback3) {
    callback1("mensaje 1")
    callback2("mensaje 2")
    callback3("mensaje 3")
}

funcionCompleja(uno, dos, tres)

/*
funcionCompleja(
    function(mensaje) {
        alert(mensaje)
    },
    function(mensaje) {
        alert(mensaje)
    },
    function(mensaje) {
        alert(mensaje)
    }
)

Ejemplo examen
function calificado (mensaje) {
    alert(mensaje);
  };
  (function (nombre, apellido, nota1, nota2, nota3, calificado) {
    var nombreCompleto = nombre + " " + apellido;
    var calificacionTotal = (nota1 + nota2 + nota3) / 3;
    var resultado = nombreCompleto + " obtuvo en programacion " + calificacionTotal;
    calificado(resultado);
  })("Jason", "Roberts", 5.0, 4.2, 3.5, calificado)

  */