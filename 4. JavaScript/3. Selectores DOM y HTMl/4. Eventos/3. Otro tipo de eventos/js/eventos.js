function cambiarRadioButtons() {
    var estadoRB = document.getElementById('activar_rb').checked;
    if (estadoRB) {
        var estado = "true"
        document.getElementById('animales').disabled = false;
        document.getElementById('postres').disabled = false;
        document.getElementById('musica').disabled = false;

    } else {
        document.getElementById('animales').disabled = true;
        document.getElementById('postres').disabled = true;
        document.getElementById('musica').disabled = true;

    }
}

//document.getElementById('activar_rb').onchange = cambiarRadioButtons;

function cargarPagina() {
    alert("Se ha cargado toda la página")
}

document.getElementsByTagName('body')[0].onload = cargarPagina;


function eventoOnFocus(event) {
    var seleccion = event.currentTarget.id;
    switch (seleccion) {
        case "animales":
            document.getElementById('sel_animales').disabled = false;
            $(document).ready(function() {
                $('select').material_select();
            });
            break;
        case "postres":
            document.getElementById('sel_postres').disabled = false;
            $(document).ready(function() {
                $('select').material_select();
            });
            break;
        case "musica":
            document.getElementById('sel_musica').disabled = false;
            $(document).ready(function() {
                $('select').material_select();
            });
            break;
    }
}