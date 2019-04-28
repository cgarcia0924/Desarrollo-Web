var Estructura = {
    "Personas": [{
            "Nombre": "mateo",
            "Edad": 24,
            "Dirección": "Calle 84F 18 45",
            "Teléfono": "3162543578",
            "Estudios": [{
                "Primaria": {
                    "Lugar": "Universidad de Antioquia",
                    "Fecha": "2013-07-19",
                },
                "Secundaria": {
                    "Lugar": "Universidad de los Andes",
                    "Fecha": "2013-07-19",
                }
            }]
        },
        {
            "Nombre": "Carlos",
            "Edad": 24,
            "Dirección": "Calle 84F 18 45",
            "Teléfono": "3165206629",
            "Estudios": [{
                "Primaria": {
                    "Lugar": "Universidad de Antioquia",
                    "Fecha": "2013-07-19",
                },
                "Secundaria": {
                    "Lugar": "Universidad de Antioquia",
                    "Fecha": "2013-07-19",
                }
            }]
        },
        {
            "Nombre": "Guillermo",
            "Edad": 24,
            "Dirección": "Calle 84F 18 45",
            "Teléfono": "3137193311",
            "Estudios": [{
                "Primaria": {
                    "Lugar": "Universidad de Antioquia",
                    "Fecha": "2013-07-19",
                },
                "Secundaria": {
                    "Lugar": "Universidad de Medellin",
                    "Fecha": "2013-07-19",
                }
            }]
        }
    ]
}

var persona1 = Estructura.Personas[0];
var persona2 = Estructura.Personas[1];
var persona3 = Estructura.Personas[2];

var Teléfono1 = persona1.Teléfono;
var Teléfono2 = persona2.Teléfono;
var Teléfono3 = persona3.Teléfono;

var estudiosPersona1 = persona1.Estudios[1];
var estudiosPersona2 = persona2.Estudios[1];
var estudiosPersona3 = persona3.Estudios[1];