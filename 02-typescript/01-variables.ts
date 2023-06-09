// 01-01-variables.ts
// npm install -g typescript
// tsc
let nombre: string = 'Jonathan'; // primitivo
let nombre2: string = 'Puglla';

// tsc 01-01-variables.ts --target es3
// tsc 01-variables
// nombre = 1;

let edad: number = 32;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;

// Duck typing
let apellido = 'Puglla'; // String ->
// apellido = 1; // Error, no es un string
apellido = 'Lalvay';
apellido.toUpperCase();


let marihuana: any = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';
let edadMultiple: number | string | Date = '2'; // 2 / new Date()
edadMultiple = '2';
edadMultiple = 'dos';
edadMultiple = new Date();
edadMultiple = 2222;
let numeroUnico: number = 1; // para igualar a otros se castea
numeroUnico = numeroUnico + Math.pow((edadMultiple as number), 2);

