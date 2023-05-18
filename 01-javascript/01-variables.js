// 01-javascript
// 01-variables.js
// Mutables e Inmutables
// Mutables (re asignadas)
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 12
numeroDos = 8
numeroUno = false;
numeroDos = true;

// Variables inmutables (no re asignadas)
const configuracionArchivos = 'PDF';
// configuracionArchivos = 'XML';
//  Vamos a preferir CONST > LET > VAR (mejor no usar)

// Tipos de variables (primitivas)
const numero = 1; // number
const sueldo = 1.2; // number
const texto = 'Jonathan' // string
const apellido = "Puglla" // string
const casado = true; // boolean
const hijos = null; // object
const zapatos = undefined; // undefined

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof casado);
console.log(typeof hijos);
console.log(typeof zapatos);

// Truty y Falsy
if (true) {
    console.log('Es verdadero');
} else {
    console.log('Es falso');
}

if ("") {
    console.log('Es verdadero');
} else {
    console.log('Es falso'); // FALSY
}

if ("Jonathan") {
    console.log('Es verdadero'); // TRUTY
} else {
    console.log('Es falso');
}

if (-1) {
    console.log('Es verdadero -1'); // TRUTY
} else {
    console.log('Es falso -1');
}

if (0) {
    console.log('Es verdadero 0');
} else {
    console.log('Es falso 0'); // FALSY
}

if (1) {
    console.log('Es verdadero 1'); // TRUTY
} else {
    console.log('Es falso 1');
}

if (null) {
    console.log('Es verdadero null');
} else {
    console.log('Es falso null'); // FALSY
}

if (undefined) {
    console.log('Es verdadero undefined');
} else {
    console.log('Es falso undefined'); // FALSY
}

const jonathan = {
    "nombre": "Jonathan",
    'apellido': "Puglla",
    edad: 32,
    casado: true,
    zapatos: undefined,
    ropa: {
        color: 'plomo',
        talla: 40,
    },
    mascotar: ['Cache', 'Pequi', 'Pandi'],
};

console.log(jonathan);

// Acceder a las propiedades
jonathan.nombre // "Jonathan"
jonathan.apellido // "Puglla"
jonathan["nombre"] // "Jonathan"

// Modificar valores
jonathan.nombre = "Hugo";
jonathan["nombre"] = "Jonathan";

// Crear atributos
jonathan.sueldo; // undefined
console.log(jonathan.sueldo); // undefined
jonathan.sueldo = 1000;
console.log(jonathan.sueldo); // 1000
jonathan["gastos"] = 100;
console.log(jonathan.gastos);
console.log(jonathan)

// Eliminar propiedades
jonathan.nombre = undefined;
console.log(jonathan);
console.log(Object.keys(jonathan))
console.log(Object.values(jonathan));
delete jonathan.nombre;
console.log(Object.keys(jonathan));
console.log(jonathan);