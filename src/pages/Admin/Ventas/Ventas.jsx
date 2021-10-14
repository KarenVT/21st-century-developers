import React, { useEffect, useState } from 'react';

const Ventas = () => {

    const [mostrarLista, setMostrarLista] = useState();
    const [cambioBoton, setCambioBoton] = useState('Lista de Ventas');

    useEffect(() => {

        return () => {
            if (mostrarLista) {
                setCambioBoton('Lista de Ventas');
            } else {
                setCambioBoton('Registrar Venta');
            }
        }
    }, [mostrarLista]);

    return (
        <div >
            <div>
                <button
                    className="boton w-2/3"
                    onClick={() => {
                        setMostrarLista(!mostrarLista);
                    }}
                >
                    {cambioBoton}
                </button>
                {mostrarLista ? <ListVentas /> : <RegisVentas />}
            </div>
        </div>
    )
}

const RegisVentas = () => {
    return (
        <>
            <div className="h-screen flex justify-center items-center ">
                <form className=" bg-white px-6 py-3 shadow-2xl">
                    <div>
                        <h1 class="text-4xl text-center pb-10 text-principal ">Account Settings</h1>
                    </div>
                    <div class="flex space-x-4 mb-3">
                        <div class="w-1/2">
                            <label className="pl-3" for="fecha">Fecha</label>
                            <input
                                className="input"
                                type="date"
                                name="fecha"
                                id="fecha"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="pl-3" for="idProducto">Id Producto</label>
                            <input
                                className="input"
                                type="text"
                                name="idProducto"
                                id="idProducto"
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-3">
                        <div className="w-1/2">
                            <label className="pl-3" for="id">Identificador</label>
                            <input
                                className="input"
                                type="text"
                                name="id"
                                id="id" />
                        </div>

                        <div className="w-1/2">
                            <label className="pl-3" for="nombreProducto">Nombre Producto</label>
                            <input
                                className="input"
                                type="text"
                                name="nombreProducto"
                                id="nombreProducto"
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-3">
                        <div className="w-1/2">
                            <label className="pl-3" for="idCliente">Id Cliente</label>
                            <input
                                className="input"
                                type="text"
                                name="idCliente"
                                id="idCliente"
                            />
                        </div>

                        <div className="w-1/2">
                            <label className="pl-3" for="cantidadProducto">Cantidad Producto</label>
                            <input
                                className="input"
                                type="text"
                                name="cantidadProducto"
                                id="cantidadProducto"
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-3">
                        <div className="w-1/2">
                            <label className="pl-3" for="nombreCliente">Nombre Cliente</label>
                            <input
                                className="input"
                                type="text"
                                name="nombreCliente"
                                id="nombreCliente"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="pl-3" for="precioUnitario">Precio unitario</label>
                            <input
                                className="input"
                                type="text"
                                name="precioUnitario"
                                id="precioUnitario"
                            />
                        </div>

                    </div>
                    <div className="flex space-x-4 mb-3">
                        <div className="w-1/2">
                            <label className="pl-3" for="nombreVendedor">Nombre Vendedor</label>
                            <input
                                className="input"
                                type="text"
                                name="nombreVendedor"
                                id="nombreVendedor"
                            />
                        </div>

                        <div className="w-1/2">

                            <label className="pl-3" for="totalVenta">Total Venta</label>
                            <input
                                className="input"
                                type="text"
                                name="totalVenta"
                                id="totalVenta"
                            />
                        </div>
                    </div>

                    <div className="flex space-x-4 justify-center">

                        <div className="w-1/4 ">
                            <div>
                                <button className="boton my-6 w-full">Registrar</button>
                            </div>
                        </div>

                    </div>

                    {/* <div>
                    <label for="address">Current Address</label>
                    <input
                        className="rounded-full  h-10 px-2 border border-gray-400 w-full focus:outline-none focus:border-transparent focus:ring focus:ring-principal"
                        type="text"
                        name="address"
                        id="address"
                    />
                    <p className="text-sm text-gray-600">
                        We will use this as your billing address
                    </p>
                </div> */}
                </form>
            </div>
        </>
    )
};

const ListVentas = () => {
    return (
        <>
        </>
    )
}
export default Ventas;
