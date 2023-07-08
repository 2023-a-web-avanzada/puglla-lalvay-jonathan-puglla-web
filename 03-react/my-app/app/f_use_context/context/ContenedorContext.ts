import {ContenedorContextObjeto} from "@/app/f_use_context/interfaces/ContenedorContextObjeto";
import {createContext} from "react";

export const ContenedorContext = createContext(
    {} as ContenedorContextObjeto
);