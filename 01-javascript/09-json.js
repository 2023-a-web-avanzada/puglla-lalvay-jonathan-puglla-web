const arregloUsuarios = [
    {
        id: 1,
        nombre: 'Jonathan',
    }
];

const arregloGuardado = JSON.stringify(arregloUsuarios); // Arreglos, Objetos
const usuario = {
    id: 1,
    nombre: 'Jonathan',
};
const objetoGuardado = JSON.stringify(usuario);

const usuario = {
    id: 1,
    nombre: 'Jonathan',
};

const objetoGuardado = JSON.stringify(usuario); // Arreglos, objetos
console.log('arregloGuardado', arregloGuardado);
console.log('objetoGuardado', objetoGuardado);
const arregloRestaurado = JSON.parse(arregloGuardado);
const objetoRestaurado = JSON.parse(arregloGuardado);
console.log('arregloRestaurado', arregloRestaurado);
console.log('objetoRestaurado', objetoGuardado);
