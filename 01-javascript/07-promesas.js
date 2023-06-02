// 07-promesas.js
const fs = require('fs');

function promesaEsPar(numero) { // f -> Promesa
    const miPrimeraPromesa = new Promise(
        (resolve, reject) => { // se puede llamar de cualquier manera
            if(numero % 2 === 0) {
                resolve(numero);
            } else {
                reject(':(no es par'); /* throw (catch) */
            }
        }
    );

    return miPrimeraPromesa;
}

// promesaEsPar(4)
//     .then(// try
//         (data) => {
//             console.log('DATA ', data); // 4
//         }
//     )
//     .catch( // catch
//         (error) => {
//             console.error('ERROR', error); // string
//         }
//     )
//     .finally(
//         () => {
//             console.log('finally');
//         }
//     );


console.log('----------------------------------------------------');

function promesaElevarAlCuadrado(numero) {
    return new Promise((res) => res(Math.pow(numero, 2)));
}

promesaEsPar(4)
    .then(// try
        (data) => {
            console.log('DATA 4:', data); // 4
            return promesaElevarAlCuadrado(data);
        }
    )
    .then(// try
        (data) => {
            console.log('DATA 16:', data); // 16
        }
    )
    .catch( // catch
        (error) => {
            console.error('ERROR', error); // string
        }
    )
    .finally(
        () => {
            console.log('finally');
        }
    );


/*
* Una funcion que acepte como parametro una variable
* del "path" del archivo y otra variable con el "contenidoArchivo".
* Utilizar el modulo 'fs' para leer el archivo en ese "path" y anadir el
* "contenidoArchivo" a ese archivo.
* */

