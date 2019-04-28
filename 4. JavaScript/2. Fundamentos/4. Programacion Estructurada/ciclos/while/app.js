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

var i = 5;

var resultado = "";

while (i < 10) {
    resultado = resultado + lista_nombres[i] + "\n";
    i = i + 1;
};

alert(resultado);