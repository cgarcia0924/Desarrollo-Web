/* function areaTriangulo() {
    var a = 0,
        b = 0,
        h = 0;
    b = prompt("INgrese la base (b) del triangulo");
    h = prompt("INgrese la altura (h) del triangulo");
    a = (b * h) / 2;

    alert("el area del triangulo es:" + a);

}

areaTriangulo(); */

function Creditos() {
    var calculo = 0,
        introduccion = 0,
        fisica = 0,
        fundamentos = 0;
    calculo = prompt("Ingrese las notas de càlculo");
    fisica = prompt("Ingrese las notas de fisica");
    fundamentos = prompt("Ingrese las notas de fundamentos");
    introduccion = prompt("Ingrese las notas de introduccion");
    promedio = (((calculo * 5) + (fisica * 3) + (fundamentos * 4) + (introduccion * 2)) / 14);
    alert("el promedio ponderado es:" + promedio.toFixed(2));
}
Creditos();