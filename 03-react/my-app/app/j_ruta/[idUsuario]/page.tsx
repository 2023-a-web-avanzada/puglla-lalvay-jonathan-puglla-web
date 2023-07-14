"use client";

import { useRouter } from "next/navigation";

export default function Page(
    {params}: { params: { idUsuario:string } }
) {
    const router = useRouter();
    const semestres = ["2020A", "2020B", "2021A", "2021B", "2022A", "2022B"];

    return(
        <>
            <div className={ "container" }>
                <p>Ruta MOSTRAR USUARIO: { params.idUsuario }</p>
            </div>
            <ul>
                {
                    semestres.map((semestre) =>
                        <li key={ semestre }>
                            <a href={`/j_ruta/${params.idUsuario}/${semestre}`}>
                                {semestre}
                            </a>
                        </li>
                    )
                }
            </ul>
        </>
    )
}
