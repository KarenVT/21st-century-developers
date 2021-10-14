import React from 'react';
import { useForm } from "react-hook-form";
import '../../../styles/styles-form.css';
import { v4 } from 'uuid'
import http from 'axios'

export const RegistroProducto = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const newData = { ...data, id: v4() };
        http.post('http//:localhost:8000/crearProducto', newData).then((res)=> console.log(res)).catch((err)=> console.log(err));
    }

    return (
        <div className="registro-producto__container">
            <h1 className="registro-producto__title">Registrar productos</h1>
            <form className="registro-producto__form" onSubmit={handleSubmit(onSubmit)}>
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
                        type="number"
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

                <button className="registro-producto__button" type="submit">Crear</button>
            </form>
        </div>
    );
}