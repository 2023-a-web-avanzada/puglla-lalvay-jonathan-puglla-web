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
    const contenidoAdicional: () => (JSX.Element) = ()=>{
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
        "bg-yellow-500"
    )

    return (
        <>
            <div className="border border-solid border-yellow p-3 m-2">
                <a target="_blank" href={url}>IR A URL</a>
                <p className={colorRojo}>Iteracion: {iteraciones} {iteracionLocal}</p>
                <p>Mostrar: {mostrar}</p>
                {contenidoAdicional()}
                { mostrar && <p>Mostrar rapido</p>}

                

            <button className="border border-solid border-black bg-red-500" onClick={
                (event) => {
                    if(colorRojo === "bg-yellow-500") {
                        setColorRojo("bg-red-500");
                    } else {
                        setColorRojo("bg-yellow-500");
                    }
                    
                    setIteracionLocal(iteracionLocal + 1);
                    console.log(event);
                }
            }>
                Aumentar
            </button>
            </div>
        </>
    )
}
