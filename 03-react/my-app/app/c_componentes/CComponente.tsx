'use client'
import { css } from '@emotion/react'
import styled from "@emotion/styled"
import { useState } from "react";

export type PropiedadesComponente = {
    url: string;
    iteraciones: number;
    mostrar?: boolean;
}

export default function CComponente(
    props: PropiedadesComponente
){
    const {url, iteraciones, mostrar} = props;
    const arreglo = [0, 1]
    // const numeroUno = arreglo[0]
    // const numeroDos = arreglo[1]
    const [numeroUno, numeroDos] = arreglo
    const contenidoAdicional = () => {
        if(mostrar) {
            return <p>Mostrar</p>
        }
        return <p>Ocultar</p>
    }
    const objeto = {}

    const [iteracionLocal, setIteracionLocal] = useState(
        iteraciones //1, // Valor de la variable
    )

    const [colorRojo, setColorRojo] = useState(
        false
    )

    return (
        <>
            <div className="border border-solid border-black p-3 m-2">
                <a target="_blank" href={url}>IR A URL</a>
                <p>Iteracion: {iteraciones}</p>
                <p>Mostrar: {mostrar}</p>
                {contenidoAdicional()}
                { mostrar && <p>Mostrar rapido</p>}
            </div>

            <button className={'${colorRojo?"border border-solid border-black bg-red-500":"border border-solid border-black bg-blue-500"}'} onClick={
                (event) => {
                    setColorRojo(true);
                    setIteracionLocal(iteracionLocal + 1);
                    console.log(event);
                }
            }>

            </button>
        </>
    )
}
