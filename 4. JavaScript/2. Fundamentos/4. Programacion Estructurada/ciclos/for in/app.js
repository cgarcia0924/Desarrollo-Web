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


var resultado = "";


for (nombre_temp in lista_nombres) {
    resultado = resultado + lista_nombres[nombre_temp] + "\n";
};

alert(resultado);