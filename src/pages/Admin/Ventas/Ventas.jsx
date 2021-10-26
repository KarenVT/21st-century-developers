import React, { useEffect, useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import { getVentas, postVentas, patchVentas, deleteVentas,  } from '../../../utils/apis/Ventas';
import { getProductos } from '../../../utils/apis/Productos';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Ventas = () => {

    useEffect(() => {

        const fetchVendedores = async () => {
            
            fetchVendedores();
        }

    }, [])


    return (
        <div className="flex h-auto w-full flex-col items-center justify-start p-10">
            <div className=" flex  h-auto w-full justify-center items-center">
                <form className=" bg-white px-6 py-3 shadow-2xl">
                    <div>
                        <h2 className="text-3xl text-center p-5 text-principal ">Registro de Ventas</h2>
                    </div>
                    <div className="flex space-x-4 mb-3">
                        <div className="w-1/2">
                            <label className="pl-3" htmlFor="id">Identificador</label>
                            <input
                                className="input"
                                type="number"
                                name="id"
                                required
                            />

                        </div>
                        <div className="w-1/2">
                            <label className="pl-3" htmlFor="fecha">Fecha</label>
                            <input
                                className="input"
                                type="date"
                                name="fecha"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-3">
                        <div className="w-1/2">
                            <label className="pl-3" htmlFor="idProducto">Id Producto</label>
                            <input
                                className="input"
                                type="number"
                                name="idProducto"
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="pl-3" htmlFor="nombreProducto">Nombre Producto</label>
                            <select
                                className="input"
                                type="text"
                                name="nombreProducto"
                                defaultValue={-1}
                                required>
                                <option value={-1} disabled>
                                    Seleccione un Producto
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-3">
                        <div className="w-1/2">
                            <label className="pl-3" htmlFor="idCliente">Id Cliente</label>
                            <input
                                className="input"
                                type="number"
                                name="idCliente"
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="pl-3" htmlFor="cantidadProducto">Cantidad Producto</label>
                            <input
                                className="input"
                                type="number"
                                name="cantidadProducto"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-3">
                        <div className="w-1/2">
                            <label className="pl-3" htmlFor="nombreCliente">Nombre Cliente</label>
                            <input
                                className="input"
                                type="text"
                                name="nombreCliente"
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="pl-3" htmlFor="precioUnitario">Precio unitario</label>
                            <input
                                className="input"
                                type="number"
                                name="precioUnitario"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-3">
                        <div className="w-1/2">
                            <label className="pl-3" htmlFor="nombreVendedor">Vendedores</label>
                            <select
                                className="input"
                                type="text"
                                name="nombreVendedor"
                                defaultValue={-1}
                                required>
                                <option value={-1} disabled>
                                    Seleccione un estado
                                </option>
                            </select>
                        </div>
                        <div className="w-1/2">
                            <label className="pl-3" htmlFor="totalVenta">Total Venta</label>
                            <input
                                className="input"
                                type="number"
                                name="totalVenta"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-center ">
                        <div className="w-3/12 px-2">
                            <button type="submit" className="boton w-full">
                                Registrar
                            </button>
                        </div>
                        <div className="w-3/12 px-2">
                            <button
                                // onClick={() => {
                                //     setMostrarLista(!mostrarLista)
                                // }}
                                className="boton w-full"
                            > Lista de Ventas
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Ventas;




