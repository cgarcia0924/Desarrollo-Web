var Persona = {
    nombre: "Carlos",
    ciudad: "Medellin",
    entidadSalud: "Sura",
    peso: 80,
    estatura: 1.74,
    fechaNacimiento: new Date("September 24, 1990"),
    ultimaConsulta: {
        fecha: new Date("December 24, 2018"),
        anotaciones: ["El paciente no presenta signos de dolor en las cicatrices de la cirugía",
            "Presión arterial media normal",
            "Se mencionan repetidos dolores en la zona abdominal"
        ]
    },
    historiaClinica: [
        ["fractura fémur", "2018/01/20"],
        ["Consulta por gripa", "2018/05/29"],
        ["consulta por dolor estomago", "2018/09/15"]
    ],
    calcularIMC: function() {
        var imc = this.peso / Math.pow(this.estatura, 2);
        return imc.toFixed(2);
    },
    calcularEdad: function() {
        var hoy = new Date();
        var edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        return edad;
    },
    imprimirDatos: function() {
        console.log("Nombre: " + this.nombre);
        console.log("Ciudad: " + this.ciudad);
        console.log("Entidad de Salud: " + this.entidadSalud);
        console.log("Peso: " + this.peso);
        console.log("Estatura: " + this.estatura);
        console.log("Fecha de Nacimiento: " + this.fechaNacimiento.toString());
        console.log("Fecha Última consulta: " + this.ultimaConsulta.fecha.toString());
        console.log("Anotaciones ultima consulta: " + this.ultimaConsulta.anotaciones[0] + ", " + this.ultimaConsulta.anotaciones[1] + ", " + this.ultimaConsulta.anotaciones[2]);
        console.log("Historia Clinica: " + this.historiaClinica[0][0] + " - " + this.historiaClinica[0][1] + "   " + this.historiaClinica[1][0] + " - " + this.historiaClinica[1][1] + "   " + this.historiaClinica[2][0] + " - " + this.historiaClinica[2][1] + "");
        console.log("Calculos: ");
        console.log("- Edad: " + this.calcularEdad());
        console.log("- Indice de masa Corporal: " + this.calcularIMC());
    }
}
document.getElementById('boton-perfil').addEventListener("click", function() {
    Persona.imprimirDatos();
})