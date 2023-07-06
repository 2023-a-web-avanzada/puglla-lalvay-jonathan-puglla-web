import {ContenedorContext} from "@/app/f_use_context/context/ContenedorContext";
import {useContext} from "react";

export default function EComponenteC() {
    const contenedorContexto = useContext(ContenedorContext);

    return(
        <>
            <h1>Componente C</h1>
            <p>{contenedorContexto.nombreUsuario}</p>
            <button className={"bg-blue-500 m-2"} onClick={
                e => {
                    e.preventDefault();
                    contenedorContexto.setNombreUsuario("CompC");
                }
            }>
                Actualizar
            </button>
            <br/>
        </>
    )
}