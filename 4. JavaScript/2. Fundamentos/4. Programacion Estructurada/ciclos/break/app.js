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


var resultado = "las personas aceptadas a la conferencia son: ";


for (i = 0; i < 10; i++) {
    if (i == 6) {
        break;
    }
    resultado = resultado + lista_nombres[i] + "\n";
};

alert(resultado);