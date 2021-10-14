import React from 'react';
import { useForm } from "react-hook-form";

export const RegistroProducto = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

    }

    return (
        <form className="registro-producto" onSubmit={handleSubmit(onSubmit)}>
            <div className="registro-producto__container-input">
                <h5>Descrición del producto</h5>
                <input
                    {...register('descripcion', { required: true })}
                    type="text"
                />
            </div>
            <div className="registro-producto__container-input">
                <h5>Valor unitario</h5>
                <input
                    {...register('valorUnidad', { required: true })}
                    type="text"
                />
            </div>
            <div className="registro-producto__container-input">
                <h5>Estado del producto</h5>
                <select {...register('estado', { required: true })}>
                    <option value="value1">Value 1</option>
                    <option value="value2">Value 2</option>
                    <option value="value3">Value 3</option>
                </select>
            </div>
        </form>
    );
}