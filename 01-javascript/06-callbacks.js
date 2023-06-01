const fs = require('fs'); // file system
// importar modulo fs

console.log('PRIMERO');
const a = 1 + 1;
fs.readFile(
    './06-ejemplo.txt', // Nombre o path del archivo
    'utf-8', // codificación
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
        console.log('SEGUNDO');
        if(errorLecturaPrimerArchivo){
            console.error(errorLecturaPrimerArchivo);
            throw new Error('Error leyendo primer archivo');
        } else {
            fs.readFile(
                './01-variables.js', // Nombre o path del archivo
                'utf-8', // codificación
                (errorLecturaSegundoArchivo, contenidoSegundoArchivo) => {

                }
            )
        }

    }
);
console.log('TERCERO');

// 1) Leer archivo: 06-ejemplo.txt,
// luego imprimir en consola
// 2) Después del paso 1, Leer archivo: 01-variables.js
// , luego imprimir en consola
// 3) Crear un nuevo archivo llamado 06-nuevo-archivo.txt
// con el contenido de los otros dos archivos

// fs.writeFile(
//     './06-nuevo-archivo.txt',
//     nuevoContenido,
//     (errorEscritura) => {
//
//     }
// )
// 1) Leer archivo: 06-ejemplo.txt, luego imprimir en consola
fs.readFile('./06-ejemplo.txt','utf8', (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
    if (errorLecturaPrimerArchivo) {
        console.error('Error leyendo el primer archivo 06-ejemplo.txt:', errorLecturaPrimerArchivo);
        return;
    }
    console.log('Contenido del archivo 06-ejemplo.txt:');
    console.log(contenidoPrimerArchivo);
    // 2) Después del paso 1, Leer archivo: 01-variables.js, lluego imprimir en consola
    fs.readFile('./01-variables.js', 'utf8', (errorLecturaSegundoArchivo, contenidoSegundoArchivo) => {
        if (errorLecturaSegundoArchivo) {
            console.error('Error al leer el archivo 01-variables.js:', errorLecturaSegundoArchivo);
            return;
        }
        console.log('Contenido del archivo 01-variables.js:');
        console.log(contenidoSegundoArchivo);
        // 3) Crear un nuevo archivo llamado 06-nuevo-archivo.txt con el contenido de los otros dos archivos
        const nuevoContenido = contenidoPrimerArchivo + "\n" + contenidoSegundoArchivo;
        fs.writeFile('./06-nuevo-archivo.txt', nuevoContenido, (errorEscritura) => {
            if (errorEscritura) {
                console.error('Error al escribir en el archivo 06-nuevo-archivo.txt:', errorEscritura);
                return;
            }

            console.log('Archivo 06-nuevo-archivo.txt creado exitosamente.');
            console.log('-------------------------------------------------');
        });
    });
});
