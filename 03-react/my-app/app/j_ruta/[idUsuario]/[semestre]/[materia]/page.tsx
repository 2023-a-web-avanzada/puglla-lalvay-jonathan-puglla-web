"use client";

export default function Page(
    {params}: {
        params: {
            idUsuario: string;
            semestre: string;
            materia: string;
        }
    }
) {
    return(
        <>
            <div className={ "container" }>
                <p>USUARIO: {params.idUsuario} / SEMESTRE: {params.semestre} / MATERIA: {params.materia}</p>
            </div>
        </>
    )
}