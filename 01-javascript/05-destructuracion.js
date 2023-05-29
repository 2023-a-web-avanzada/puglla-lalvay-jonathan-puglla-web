// 05-destructuracion.js
const jonathan = {
    nombre: "Jonathan",
};

const carolina = {
    nombre: "Carolina",
    apellido: "Eguez",
};

const jonathanCarolina = { // Crear una nueva REFERENCIA (VALOR)
    ...carolina, // el orden es importante para propiedades que se repiten
    ...jonathan, // El último reemplaza a los anteriores
};

console.log("jonathanCarolina, ", jonathanCarolina);

// Destructuración de arreglos
const arregloUno = [1,2,3,4,5];
const arregloDos = [6,7,8,9,10];
const superArreglo = [
    ...arregloUno, // El orden importa
    ...arregloDos,
]; // [1,2,3,4,5,6,7,8,9,10];
console.log('superArreglo', superArreglo);