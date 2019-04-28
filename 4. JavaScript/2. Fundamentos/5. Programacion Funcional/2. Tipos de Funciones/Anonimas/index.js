// funciones anónimas

//setInternal(function() { console.log("Mensjae repetitivo"); }, 2000);
//setInternal(function() { console.log("Mensaje luego de espera"); }, 2000);

function Personalizada(numero1, numero2, funcion2) {
    var resultado = numero1 + numero2;
    funcion2(resultado);
}

Personalizada(4, 8, function(resultado) { alert(resultado); });