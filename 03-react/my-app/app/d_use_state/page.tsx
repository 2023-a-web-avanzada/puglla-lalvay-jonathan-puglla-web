// d_use_state/page.tsx
'use client'
import {useEffect, useState} from "react";

interface Usuario {
    nombre: string;
    edad: number;
    casado: boolean;
    hijos?: number[];
}
export default function Page() {
    const [numero, setNumero] = useState(0);
    const [arregloNumeros, setArregloNumeros] = useState([1,2,3] as number[]);
    const [usuario, setUsuario] = useState({
        nombre: "Jonathan",
        edad: 22,
        casado: false,
    } as Usuario)
    // Ayuda a escuchar cambios variables
    useEffect(
        () => {
            console.log('Inicio del componente', numero, usuario);
        },
        [] // arreglo de variables  // si está vacio se ejcuta al principio una vez
    );

    useEffect(
        () => {
            console.log('Cambio el número', numero)
        },
        [numero] // arregloVariables
    );

    useEffect(
        () => {
            console.log('Cambio el arregloNumeros', arregloNumeros);
        },
        [arregloNumeros] // arregloVariables
    )

    useEffect(
        () => {
            console.log('Cambio el usuario', usuario);
        },
        [usuario] // arreglo variables
    )

    // Cualquiera de las variables que estén en el arreglo lo ejecutan
    useEffect(
        () => {
            console.log('Cambio todo: ', numero, arregloNumeros, usuario);
        },
        [numero, arregloNumeros, usuario]
    )

    return (
        <>
            <button className="bg-blue-500 m-2" onClick={(event) => {
                event.preventDefault();
                setNumero(numero + 1);
            }}>
                Numero {numero}
            </button>

            <button className="bg-red-500 m-2" onClick={(event) => {
                event.preventDefault();
                setArregloNumeros([...arregloNumeros, 1]);
            }}>
                Arreglo {JSON.stringify(arregloNumeros)}
            </button>

            <button className="bg-yellow-500 m-2" onClick={(event) => {
                event.preventDefault();
                let usuarioNuevo = {...usuario, nombre: new Date().toString()};
                setUsuario(usuarioNuevo)
            }}>
                Usuario {JSON.stringify(usuario)}
            </button>
        </>
    )
}


