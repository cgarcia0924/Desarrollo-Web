var lista_nombres = [
    "carlos",
    "camilo",
    "juan",
    "alberto",
    "manuel",
    "milton",
    "guillermo",
    "dilfia",
    "andres",
    "alejandra"
];


var resultado = "las personas aceptadas a la conferencia son: \n";


for (var i = 0; i < 10; i++) {
    if ((i % 2) == 0) {
        continue;
    }
    resultado = resultado + lista_nombres[i] + "\n";
};

alert(resultado);