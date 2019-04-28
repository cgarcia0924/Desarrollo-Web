function mostrar_tecla(event) {
    var tecla = event.which || event.keycode;
    document.querySelector('#tarjeta_muestra_tecla #texto_tarjeta')
        .innerHTML = "Presionaste la tecla: " + String.fromCharCode(tecla);

};

// en la consola de chrome o el navegador  usar:
document.onkeypress = mostrar_tecla

function CambiarTituloVerde() {
    document.querySelector("#tarjeta_cambia_color .card-image span").className = "card-title green"
}

function CambiarTituloNegro() {
    document.querySelector("#tarjeta_cambia_color .card-image span").className = "card-title black"
}

//document.onkeydown = CambiarTituloVerde
//document.onkeyup = CambiarTituloNegro

function TeclaTextBox(event) {
    var tecla = event.which || event.keycode;
    document.querySelector('#tarjeta_presiona_input_text .card-action a').innerHTML = "Presionaste:" + String.fromCharCode(tecla)
}

document.onkeypress = TeclaTextBox