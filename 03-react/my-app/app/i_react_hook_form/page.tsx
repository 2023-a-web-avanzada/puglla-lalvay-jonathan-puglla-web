"use client";

import { useState } from "react";
import {Controller, useForm} from "react-hook-form";
import { FormularioEjemplo } from "@/app/i_react_hook_form/types/FormularioEjemplo";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export default function Page() {
    const [nombre, setNombre] = useState('Jonathan');
    const {
        handleSubmit,
        register,
        formState: {errors, isValid},
        control
    } = useForm<FormularioEjemplo>(
        {
            defaultValues: {
                nombre: 'Jonathan',
                estadoCivil: ''
            },
            mode: 'all'
        }
    );

    const controladorSubmit = (data: FormularioEjemplo) => {
        console.log(data);
    }

    return(
        <>
            <h1>Formulario con react hook form</h1>
            <form onSubmit={ handleSubmit(controladorSubmit) }>
                <div className={ "mb-3" }>
                    <label htmlFor={ "nombre" } className={ "form-label" }>Nombre</label>
                    <input
                        type={ "text" }
                        className={ "form-control" }
                        placeholder={ "P.E. Jonathan" }
                        id={ "nombre" }
                        {
                            ...register('nombre', {
                                required: {
                                    value: true,
                                    message: 'Nombre requerido'
                                },
                                maxLength: {value: 20, message: 'Nombre máximo de 20 caracteres'},
                                minLength: {value: 5, message: 'Introduce al menos 5 caracteres'},
                            })
                        }
                    />
                    <div id={ "nombreHelp" } className={ "form-text" }>
                        Ingresa tu nombre
                    </div>
                    { errors.nombre &&
                        <div className="alert alert-warning"
                             role="alert">
                            Tienes errores: {errors.nombre.message}
                        </div>
                    }
                </div>
                <div className={ "mb-3" }>
                    <FormControl fullWidth>
                        <InputLabel id={ "estadoCivilLabelId" }>Estado civil</InputLabel>
                        <Controller
                            control={control}
                            rules={{required: {value: true, message:"Estado C requerido"}}}
                            name="estadoCivil"
                            render={
                                ({field: {onChange, value, onBlur}}) => {
                                    return(
                                        <>
                                            <Select
                                                labelId={ "estadoCivilLabelId" }
                                                id={ "estadoCivilId" }
                                                label={ "Estado Civil" }
                                                onBlur={onBlur}
                                                onChange={onChange as any}
                                                value={value}
                                            >
                                                <MenuItem value={ "casado" }>Casado</MenuItem>
                                                <MenuItem value={ "soltero" }>Soltero</MenuItem>
                                            </Select>
                                        </>
                                    )
                                }
                            }
                                />
                        { /* Termina controller */ }
                        {
                            errors.estadoCivil &&
                            <div className={ "alert alert-warning" } role={ "alert" }>
                                Tiene errores {errors.estadoCivil.message}
                            </div>
                        }
                    </FormControl>
                </div>
                <Button type={ "submit" } disabled={!isValid} variant={ "outlined" }>
                    Submit
                </Button>
            </form>
        </>
    );
}
