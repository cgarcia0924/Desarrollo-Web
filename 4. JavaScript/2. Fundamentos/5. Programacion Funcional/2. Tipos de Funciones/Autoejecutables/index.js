/*(function() {
    console.log(this);
})();

(function(nombre, apellido) {
    console.log(nombre + "" + apellido);
})("Andres", "Monsalve");

*/

//contexto

var myObject = {
    property: "hola mundo 1",
    func: function() {
        return this.property;
    }
};

console.log(myObject.func());

var myObject2 = {
    property: "hola mundo 2"
};

function retornarPropiedad() {
    alert(this.property);
};

myObject2.f = retornarPropiedad;
myObject2.f();