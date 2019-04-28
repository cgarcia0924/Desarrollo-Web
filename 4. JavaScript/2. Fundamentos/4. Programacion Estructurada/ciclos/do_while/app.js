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

var i = 0;

var resultado = "";

do {
    resultado = resultado + lista_nombres[i] + "\n";
    i = i + 1;
} while (i < 10);

alert(resultado);