// 02-arreglos.js
let arreglo = [6, 7, 8, 9, 10];
arreglo = 1;
arreglo = true;
arreglo = undefined;
arreglo = null;
arreglo = {};
arreglo = [true, 1, 1.1, "Jonathan", "Puglla", undefined, null, {}, [1, 2]];
arreglo = [5, 6, 7, 8, 9];

// for of
for (let numero of arreglo) { // valores
    console.log('numero', numero);
}

// for in
for (let indice in arreglo) { // indices
    console.log('indices', indice);
}

// Añadir al final un elemento
arreglo.push(11);
// Elminar al final un elemento
arreglo.pop();
// Añadir al principio del arreglo
arreglo.unshift(4);
// splice(índice donde empezar, número de elementos eliminados, ítems a agregar)
/*
* P. ej. arreglos.splice(
*  índice, - Requerido
* eliminar 3 elementos - Requerido (también puedo borrar 0 elementos)
* 1,2,3,4,5,6 // Agregar los elementos del 1-6 - OPCIONAL
* );
* */
arreglo.splice(0, 0, 1,2,3);
console.log(arreglo);
const indiceNuevo = arreglo.indexOf(9);