/* Funciones 
function nombreFuncion() {
    // Bloque de código
}

// Llamado a la funcion :

nombreFuncion() // Recordar los parentesis para ejecutarla ;

// Parametros

function nombreFuncion(nombre, apellido, edad, peso, ) {
    // Bloque de código
}

// Llamado al a funcion con parametros

nombreFuncion('Edward', 'Monsalve', '24', '80');
*/


function alertarMensaje(nombre, edad, estatura) {
    alert('Mi nombre es : ' + nombre + ' , tengo ' + +' años y mi estatura es: ' + estatura + ' CM');
}

alertarMensaje('Carlos', 28, '1.88');


function alertarMensaje2(nombre, edad, estatura) {
    var mensaje = "nombre es: " + nombre + ", tengo " + edad + " años y mi estarura es" + estatura + " CM"
    return mensaje
}

console.log(alertarMensaje2("Carlos", 28, "180"))

function sumar() {
    if (arguments.length > 0) {
        alert(arguments[0] + arguments[1])
    } else {
        alert("no se enviaron parametros a la funcion")
    }
}

sumar(4, 8)