'use client'
import {ConsultaMoneda} from "@/app/g_ejemplo_criptomoneda/interfaces/consulta-moneda";
import {useEffect, useState} from "react";
import {MonedasConst} from "@/app/e_custom_hook/consts/monedas_const";
import {Moneda} from "@/app/e_custom_hook/interfaces/moneda";
import useSelectMoneda from "@/app/e_custom_hook/hooks/useSelectMoneda";

export default function CryptoFormulario(params: any) {
    const {setMonedas} = params;
    const [monedasArreglo, setMonedasArreglo] =
        useState(MonedasConst);
    const [criptoMonedasArreglo, setCriptoMonedasArreglo] =
        useState([] as Moneda[]);
    const [valorMoneda, SelectMonedaComponente] =
        useSelectMoneda(
            'Seleccionar Moneda',
            monedasArreglo
        )
    const [valorCriptoMoneda, SelectCriptoMonedaComponente] =
        useSelectMoneda(
            'Seleccionar Criptomoneda',
            criptoMonedasArreglo
        )
    useEffect(
        () => {
            const consultarAPICripto = async () => {
                const url =
                    'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
                const respuesta = await fetch(url);
                const dataPlana = await respuesta.json();
                const arregloCriptos: Moneda[] = dataPlana.Data.map(
                    (criptoMoneda: any) => {
                        const criptoMonedaLocal: Moneda = {
                            id: criptoMoneda.CoinInfo.Name,
                            nombre: criptoMoneda.CoinInfo.FullName,
                        }
                        return criptoMonedaLocal;
                    }
                );
                setCriptoMonedasArreglo(arregloCriptos);
            }
            consultarAPICripto().then().catch((error) => {
                console.error(error);
            });
        },
        []
    );
    const manejarSubmitFormulario = (evento: any) => {
        evento.preventDefault();
        const monedaConsulta: ConsultaMoneda = {
            valorCriptoMoneda: valorCriptoMoneda as string,
            valorMoneda: valorMoneda as string
        }
        setMonedas(monedaConsulta);
    }
    return (
        <>
            <form onSubmit={manejarSubmitFormulario}>
                {SelectMonedaComponente}
                {SelectCriptoMonedaComponente}
                <br/>
                <button className={'btn btn-primary w-100'} type={'submit'}>
                    Consultar
                </button>
            </form>
        </>
    );
}