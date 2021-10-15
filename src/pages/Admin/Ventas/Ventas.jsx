import React, { useEffect, useState, useRef } from 'react';

const ventasBackend = [
    {
        fecha: '2020/12/04',
        idProducto: 1,
        id: 1,
        nombreProducto: 'pantalon negro',
        idCliente: '02323',
        cantidadProducto: 1,
        nombreCliente: 'Javier Hernandez',
        precioUnitario: 10000,
        nombreVendedor: 'Sebastian',
        totalVenta: 10000,

    },
    {
        fecha: '2020/12/04',
        idProducto: 1,
        id: 1,
        nombreProducto: 'pantalon negro',
        idCliente: '02323',
        cantidadProducto: 1,
        nombreCliente: 'Javier Hernandez',
        precioUnitario: 10000,
        nombreVendedor: 'Sebastian',
        totalVenta: 10000,

    },
    {
        fecha: '2020/12/04',
        idProducto: 1,
        id: 1,
        nombreProducto: 'pantalon negro',
        idCliente: '02323',
        cantidadProducto: 1,
        nombreCliente: 'Javier Hernandez',
        precioUnitario: 10000,
        nombreVendedor: 'Sebastian',
        totalVenta: 10000,

    },
    {
        fecha: '2020/12/04',
        idProducto: 1,
        id: 2,
        nombreProducto: 'pantalon Rojo',
        idCliente: '02323',
        cantidadProducto: 1,
        nombreCliente: 'Andres Hernandez',
        precioUnitario: 20000,
        nombreVendedor: 'Sebastian',
        totalVenta: 20000,

    },
]

const Ventas = () => {

    const [mostrarLista, setMostrarLista] = useState(true);
    const [venta, setVentas] = useState([]);
    const [cambioBoton, setCambioBoton] = useState('Ver lista de Ventas');

    useEffect(() => {
        // datos desde el backend
        setVentas(ventasBackend);
    }, []);

    useEffect(() => {
        // movernos de registros a listas de ventas por medio de un boton
        return () => {
            if (mostrarLista) {
                setCambioBoton('Ver lista de Ventas');
            } else {
                setCambioBoton('Registrar Venta');
            }
        }
    }, [mostrarLista]);

    return (
        <div className="flex h-full w-full flex-col items-center justify-start p-10">
            <div className="flex flex-col items-center">
                <h1 className="bg-paleta5 bg-opacity-50 text-4xl m-5 p-5 text-paleta6">
                    Área de Administación de Ventas
                </h1>
                {mostrarLista ? (
                    <ListVentas
                        listaventas={venta}
                    />
                ) : (
                    <RegisVentas
                        setMostrarLista={setMostrarLista}
                        setVentas={setVentas}
                        listaventas={venta}
                    />
                )}
                <button
                    onClick={() => {
                        setMostrarLista(!mostrarLista);
                    }}
                    className=" rounded-full h-10 w-2/6 mt-5 bg-paleta2 bg-opacity-80 text-paleta6 shadow-lg"
                >
                    {cambioBoton}
                </button>
            </div>
        </div>
    )
}

const RegisVentas = ({ setMostrarLista, listaventas, setVentas }) => {

    // UseRef Hook le permite conservar valores. Se puede usar para almacenar un valor mutable que no causa una repetición cuando se actualiza.
    const form = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();

        const nv = new FormData(form.current);

        const nuevaVenta = {};
        nv.forEach((value, key) => {
            nuevaVenta[key] = value;
        });

        setMostrarLista(true)
        setVentas(...listaventas, nuevaVenta);
    };




    return (
        <div className=" flex justify-center items-center">
            <form ref={form} onSubmit={submitForm} className=" bg-white px-6 py-3 shadow-2xl">
                <div>
                    <h2 class="text-3xl text-center pb-10 text-principal ">Registro de Ventas</h2>
                </div>
                <div className="flex space-x-4 mb-3">
                    <div className="w-1/2">
                        <label className="pl-3" for="fecha">Fecha</label>
                        <input
                            className="input"
                            type="date"
                            name="fecha"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="pl-3" for="idProducto">Id Producto</label>
                        <input
                            className="input"
                            type="text"
                            name="idProducto"
                            required
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
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="pl-3" for="nombreProducto">Nombre Producto</label>
                        <input
                            className="input"
                            type="text"
                            name="nombreProducto"
                            required
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
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="pl-3" for="cantidadProducto">Cantidad Producto</label>
                        <input
                            className="input"
                            type="text"
                            name="cantidadProducto"
                            required
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
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="pl-3" for="precioUnitario">Precio unitario</label>
                        <input
                            className="input"
                            type="text"
                            name="precioUnitario"
                            required
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
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="pl-3" for="totalVenta">Total Venta</label>
                        <input
                            className="input"
                            type="text"
                            name="totalVenta"
                            required
                        />
                    </div>
                </div>
                <div className="flex space-x-4 justify-center">
                    <div className="w-1/4 ">
                        <div>
                            <button type="submit" className="boton my-6 w-full">
                                Registrar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};

const ListVentas = ({ listaventas }) => {

    useEffect(() => {
        console.log("ventas:", listaventas);
    }, [listaventas]);

    return (
        <>
            <div className="bg-white px-6 py-3 shadow-2xl">
                <div>
                    <h2 class="text-3xl text-center pb-10 text-principal ">Listado de Ventas</h2>
                </div>
                <table className="">

                    <thead>
                        <tr>
                            <th >Id</th>
                            <th >Fecha</th>
                            <th >Nombre Producto</th>
                            <th >Nombre Cliente</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaventas.map((venta) => {
                            return (
                                <tr>
                                    <th>{venta.id}</th>
                                    <td>{venta.fecha}</td>
                                    <td>{venta.nombreProducto}</td>
                                    <td>{venta.nombreCliente}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Ventas;
