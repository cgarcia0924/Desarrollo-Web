// Variables

var nombre;
var apellido;
var email;
var usuario;
var password;
var boton;

//asignacion

nombre = document.getElementById("nombre");
apellido = document.getElementById("apellido");
email = document.getElementById("email");
usuario = document.getElementById("usuario");
password = document.getElementById("password");
boton = document.getElementById("btn-guardar");

// mostrar el objeto seleccionado

console.log(password);

// FUnction que se ejecuta en el evento

function mostrarAlerta(mensaje) {
    alert("El usuario realizó clic sobre el boton");
}

// Asignaciòn del evento al boton

boton.addEventListener('click', mostrarAlerta)