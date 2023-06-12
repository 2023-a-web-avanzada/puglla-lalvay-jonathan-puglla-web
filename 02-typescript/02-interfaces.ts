// 02-interfaces
export class A implements B {
    edad = 1;
    nombre = 'a';
}

export interface B {
    nombre: string; // nombre: string,
    edad: number; // edad: nombre,
}

export type C = {
    nombre: string; // nombre: string,
    edad: number; // edad: number,
}

type Usuario = {
    nombre: string;
    apellido: string;
    edad?: number | undefined; // opcional
    sueldo?: number; // opcional
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    // funciones
    imprimirUsuario: (mensaje: string) => string | 'BN';
    calcularImpuesto: (impuesto: number) => number;
    estadoActual?: () => 'AP' | 'AF' | 'AT'; // opcional
    // calcularImpuesto parametro numero impuesto, sueldo + sueldo * impuesto
    // estadoActual no reciba parámetros,"AP" "AF" "AT"
}

let user: Usuario = {
    nombre: 'Jonathan',
    apellido: 'Puglla',
    casado: 0,
    sueldo: 11.2,
    estado: 'AC',
    imprimirUsuario: (mensaje) => {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: impuesto => {
        return user.sueldo + user.sueldo * impuesto;
    },
    estadoActual: () => {
        switch (user.estado) {
            case "AC":
                return 'AP';
            case "BN":
                return 'AF';
            case "IN":
                return 'AT';
        }
    }

}