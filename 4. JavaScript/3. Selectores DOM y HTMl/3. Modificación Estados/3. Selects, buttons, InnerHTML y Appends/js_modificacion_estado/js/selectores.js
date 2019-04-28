// Desactivar Radio Button
document.getElementById("activar_rb").disabled = "False"

//cambia estado del interruptor

document.getElementById("activar_rb").checked = "True"

// cambia estado 

document.getElementById("animales").checked = "True"
document.getElementById("musica").checked = "True"
document.getElementById("postres").disabled = "True"

//Selects
document.getElementById("sel_animales").checked = "True"

// para materialize
$(document).ready(function() {
    $("select").material_select();
});

document.getElementById('sel_postres').querySelector("option[value='helado']").selected = "true"
$(document).ready(function() { $('select').material_select(); });

document.getElementById('sel_postres').querySelector("option[value='torta_chocolate']").selected = "true"
$(document).ready(function() { $('select').material_select(); });

// Inner Html y appends

document.getElementsByTagName("h5")[2].innerHTML = "Selecciona tu animal favorito y tus postres.";


//Appends para agregar una nuevca lista de seleccion, se debe modificiar el DIV

document.getElementById('lista_animales').className = "input-field col s4";
"input-field col s4"

document.getElementById('lista_postres').className = "input-field col s4";
"input-field col s4"

var cont_lista_nueva = document.createElement("div");

cont_lista_nueva.id = "lista_musica";

cont_lista_nueva.className = "input-field col s4";

document.getElementById("contenedor_listas").appendChild(cont_lista_nueva);

var lista_musica = document.createElement("select");

lista_musica.id = "sel_musica";

lista_musica.className = "icons";

var dis_opt = document.createElement("option");
dis_opt.value = "";
dis_opt.disabled = "true";
dis_opt.selected = "true";
dis_opt.innerHTML = "Seleccione su instrumento favorito";

//se agregan los instrumentos
var opt_trompeta = document.createElement("option")
opt_trompeta.value = "trompeta";
opt_trompeta.dataset.icon = "img/trompeta.png";
opt_trompeta.className = "left circle";
opt_trompeta.innerHTML = "trompeta";

var opt_piano = document.createElement("option")
opt_piano.value = "piano";
opt_piano.dataset.icon = "img/piano.png";
opt_piano.className = "left circle";
opt_piano.innerHTML = "piano";

var opt_violin = document.createElement("option")
opt_violin.value = "violin";
opt_violin.dataset.icon = "img/violin.png";
opt_violin.className = "left circle";
opt_violin.innerHTML = "violin";

var opt_clarinete = document.createElement("option")
opt_clarinete.value = "clarinete";
opt_clarinete.dataset.icon = "img/clarinete.png";
opt_clarinete.className = "left circle";
opt_clarinete.innerHTML = "clarinete";

//Se muestran en pantalla

lista_musica.appendChild(dis_opt);
lista_musica.appendChild(opt_piano);
lista_musica.appendChild(opt_violin);
lista_musica.appendChild(opt_clarinete);
lista_musica.appendChild(opt_trompeta);

cont_lista_nueva.appendChild(lista_musica);
var musicaLabel = document.createElement("label");
musicaLabel.innerHTML = ("Instrumentos Musicales");
cont_lista_nueva.appendChild(musicaLabel);
//se debe ejecutar el siguiente comando para actualizar la renderizaciòn
$(document).ready(function() { $('select').material_select(); });