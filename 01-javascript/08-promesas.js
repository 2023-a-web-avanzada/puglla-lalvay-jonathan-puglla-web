// 08-promesas.js
/*
* Una funcion que acepte como parametro una variable
* del "path" del archivo y otra variable con el "contenidoArchivo".
* Utilizar el modulo 'fs' para leer el archivo en ese "path" y añadir el
* "contenidoArchivo" a ese archivo.
* */

const fs = require('fs');

function leerArchivo(path) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path, // Nombre o path del archivo
                'utf-8', // Codificación
                (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
                    if(errorLecturaPrimerArchivo) {
                        console.error(errorLecturaPrimerArchivo);
                        reject('Error leyendo primer archivo');
                    } else {
                        resolve(contenidoPrimerArchivo);
                    }
                }
            );
        }
    )
}

function escribirArchivo(path, contenidoArchivo) {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(path, contenidoArchivo, (errorEscritura) => {
                if (errorEscritura) {
                    console.error(errorEscritura);
                    reject('Error al escribir en el archivo');
                } else {
                    resolve(contenidoArchivo);
                }
            });
        }
    )
}

let miContenidoPrimerArchivo = '';
leerArchivo('06-ejemplo.txt')
    .then(
        (contenidoPrimerArchivo) => {
            miContenidoPrimerArchivo = contenidoPrimerArchivo;
            return leerArchivo('./01-variables.js');
        }
    )
    .then(
        (contenidoSegundoArchivo) => {
            return escribirArchivo(
                './06-nuevo-archivo.txt',
                miContenidoPrimerArchivo + "\n" + contenidoSegundoArchivo
            );
        }
    )
    .catch( // catch
        (error) => {
            console.error('ERROR', error); // string
        }
    )
    .finally(
        () => {
            console.log('Archivo creado exitosamente.');
        }
    );

// ASYNC AWAIT
// REGLAS:
// 1) Estar dentro de una función (nombrada o anónima)
// 2) AGREGAR la palabras "async" antes de la declaración de la función
// 3) AGREGAR la palabra "await" antes de la declaración de la promesa
// const a = async function() {}
// const a = async ()=>{}
async function ejercicioConAwait() {
    const pathUno = '06-ejemplo.txt';
    const pathDos = '01-variables.js';
    const pathTres = '06-ejemplo-respuesta.txt';
    try {
        const contenidoUno = await leerArchivo(pathUno);
        const contenidoDos = await leerArchivo(pathDos);
        const contenidoTotal = contenidoUno + '\n' + contenidoDos;
        await escribirArchivo(pathTres, contenidoTotal);
    } catch (error) {
        console.error(error);
    }
}

ejercicioConAwait();

