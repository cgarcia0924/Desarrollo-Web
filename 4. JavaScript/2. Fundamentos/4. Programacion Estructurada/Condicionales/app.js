function PruebaCondicion2() {
    var a = 0,
        b = 0,
        r = 0;
    a = prompt("Ingrese el valor de a");
    b = prompt("INgrese el valor de b");
    if (a > b) {
        r = a * b;
    }
    alert("El valor de r es:" + r);
}
PruebaCondicion2();


function PruebaCondicion() {
    var a = 0,
        b = 0,
        r = 0;
    a = prompt("Ingrese el valor de a");
    b = prompt("INgrese el valor de b");
    if (a > b) {
        r = a * b;
    } else {
        r = b - a;
    }
    alert("El valor de r es:" + r);
}
PruebaCondicion();