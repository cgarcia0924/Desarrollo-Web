document.getElementById('boton-receta1').addEventListener('click', function() {
    var Ingredientes = ["Claras de huevo", "Azucar blanca", "Leche condensada", "Gelatina sin sabor", "limones"];
    var UnidadesHuevos = 5;
    var GramosAzucar = 150;
    var LecheCondensada = 200;
    var UnidadesGelatina = 1;
    var UnidadesLimones = 4;

    console.log("Adicionar las " + UnidadesHuevos + " " + Ingredientes[0] + " en un Bol y batir con los " + GramosAzucar + " gramos de " + Ingredientes[1]);

    console.log("Adicionar los " + LecheCondensada + " gramos de " + Ingredientes[2] + " y batir bien");

    console.log("Adicionar el zumo de " + UnidadesLimones + " " + Ingredientes[4] + " y " + UnidadesGelatina + " sobre de " + Ingredientes[3] + " hidratada en agua tibia");

    console.log("Deposita la mezcla en moldes individaules y refrigera");

})

document.getElementById('boton-receta2').addEventListener('click', function() {
    var Ingredientes = ["Ginebra", "Vermouth Seco", "Aceituna"];
    var onzasGin = 2.5;
    var onzasVer = 0.5;
    var unidadesAceitunas = 1;

    console.log("Verte las " + onzasGin + " onzas de " + Ingredientes[0] + " en una coctelera");
    console.log(" Añadir las " + onzasVer + " onzas de " + Ingredientes[1]);
    console.log("Servir en una copa tipo Martini y añadir " + unidadesAceitunas + " " + Ingredientes[2]);


})