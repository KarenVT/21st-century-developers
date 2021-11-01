import React, { useEffect, useState, useRef } from 'react';
import { getUsuarios } from '../../../utils/apis/Usuarios';
import { nanoid } from 'nanoid';
import { getVentas, postVentas, patchVentas, deleteVentas, } from '../../../utils/apis/Ventas';
import { getProductos } from '../../../utils/apis/Productos';


// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Ventas = () => {
    const [vendedores, setVendedores] = useState([]);
    const [productos, setProductos] = useState([]);
    const [ListaTabla, setListaTabla] = useState([]);

    const form = useRef(null);


    useEffect(() => {

        const fetchVendedores = async () => {
            await getUsuarios(
                (response) => {
                    setVendedores(response.data);
                    // setActualizarDatos(false);
                },
                (error) => {
                    console.error(error);
                }
            );
        };
        fetchVendedores();

    }, []);

    useEffect(() => {

        const fetchProductos = async () => {
            await getProductos(
                (response) => {
                    setProductos(response.data);
                },
                (error) => {
                    console.error(error);
                }
            );
        };
        fetchProductos();

    }, []);

    const submitForm = async (e) => {
        e.preventDefault();
        const fv = new FormData(form.current);

        const nuevaVenta = {};
        fv.forEach((value, key) => {
            nuevaVenta[key] = value;
        });

        const listaProductos = Object.keys(nuevaVenta).map((v) => {
            if (v.includes("producto")) {
                return (
                    ListaTabla.filter((p) => p._id === nuevaVenta[v])[0]
                );
            }
            return null;
        })
            .filter((p) => p);
        console.log("listaProdcutos", listaProductos);

        // Object.keys(nuevaVenta).map((v) => {
        //     if (v.includes("cantidadProducto")) {
        //         const numP = parseInt(v.split("-")[1]);
        //         listaProductos[numP]["cantidadProducto"] = nuevaVenta[v]
        //     }
        //     return null;
        // })

        console.log("listaProdcutos con ventas", listaProductos);
        const mostrarInfo = {
            id: nuevaVenta.id,
            fecha: nuevaVenta.fecha,
            // idProducto: nuevaVenta.idProducto,
            // nombreProducto: productos.filter((p) => p._id === nuevaVenta.nombreProducto)[0],
            idCliente: nuevaVenta.idCliente,
            cantidadProducto: nuevaVenta.cantidadProducto,
            nombreCliente: nuevaVenta.nombreCliente,
            // precioUnitario: nuevaVenta.precioUnitario,
            nombreVendedor: vendedores.filter((v) => v._id === nuevaVenta.nombreVendedor)[0],
            totalVenta: nuevaVenta.totalVenta,
            nombreProducto: listaProductos,
        };

        await postVentas(mostrarInfo,
            (response) => {
                console.log(response.data);
            },
            (error) => {
                console.error(error);
            }
        );
        console.log("mostrarInfo", mostrarInfo);
    };

    return (
        <div className="flex h-auto w-full flex-col items-center justify-start p-10">
            <div className=" flex  h-auto w-full justify-center items-center">
                <form ref={form} onSubmit={submitForm} className=" bg-white px-6 py-3 shadow-2xl">
                    <div>
                        <h2 className="text-3xl text-center p-5 text-principal ">Registro de Ventas</h2>
                    </div>
                    <div className="flex space-x-4 mb-3 justify-center">

                        <ListVentas
                            productos={productos} setProductos={setProductos} setListaTabla={setListaTabla} />

                    </div>
                    <div className="flex space-x-4 mb-3 justify-center">
                        <div className="w-1/3">
                            <label className="pl-3" htmlFor="id">Identificador</label>
                            <input
                                className="input"
                                type="number"
                                name="id"
                                required
                            />

                        </div>
                        <div className="w-1/3">
                            <label className="pl-3" htmlFor="fecha">Fecha</label>
                            <input
                                className="input"
                                type="date"
                                name="fecha"
                                required
                            />


                        </div>
                        <div className="w-1/3">
                            <label className="pl-3" htmlFor="idCliente">Id Cliente</label>
                            <input
                                className="input"
                                type="number"
                                name="idCliente"
                                required
                            />
                        </div>
                        {/* <div className="w-1/2">
                            <label className="pl-3" htmlFor="cantidadProducto">Cantidad Producto</label>
                            <input
                                className="input"
                                type="number"
                                name="cantidadProducto"
                                required
                            />
                        </div> */}
                    </div>
                    <div className="flex space-x-4 mb-3 justify-center">

                        <div className="w-1/2">
                            {/* <label className="pl-3" htmlFor="precioUnitario">Precio unitario</label>
                            <input
                                className="input"
                                type="number"
                                name="precioUnitario"
                                required
                            /> */}
                            <label className="pl-3" htmlFor="nombreCliente">Nombre Cliente</label>
                            <input
                                className="input"
                                type="text"
                                name="nombreCliente"
                                required
                            />
                        </div>


                        <div className="w-1/2">
                            <label className="pl-3" htmlFor="nombreVendedor">Vendedor</label>
                            <select
                                className="input"
                                type="text"
                                name="nombreVendedor"
                                defaultValue=""
                                required>
                                <option value="" disabled>
                                    Seleccione un Vendedor
                                </option>
                                {vendedores.map((e) => {
                                    return (

                                        <option key={nanoid()} value={e._id}>{`${e.nombre}`}</option>
                                    );
                                })}
                            </select>

                        </div>
                    </div>
                    {/* <div className="flex space-x-4 mb-3">
                        <div className="w-1/2">
                        
                            <label className="pl-3" htmlFor="totalVenta">Total Venta</label>
                            <input
                                className="input"
                                type="number"
                                name="totalVenta"
                                required
                            />
                        </div>
                    </div> */}
                    {/* <div className="flex space-x-4 mb-3">
                        <div className="w-1/2">
                            <label className="pl-3" htmlFor="idProducto">Id Producto</label>
                            <input
                                className="input"
                                type="number"
                                name="idProducto"
                                required
                            />
                        </div>

                    </div> */}
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

// elegir más de un producto

const ListVentas = ({ productos, setProductos, setListaTabla }) => {
    const [agregarProducto, setAgregarProducto] = useState({});
    const [agregarFila, setAgregarFila] = useState([]);



    useEffect(() => {
        console.log(agregarProducto);

    }, [agregarProducto]);

    useEffect(() => {
        console.log("Fila", agregarFila);
        setListaTabla(agregarFila)
    }, [agregarFila, setListaTabla]);

    // agregarlos a la tabla de productos
    const otroProducto = () => {
        setAgregarFila([...agregarFila, agregarProducto]);
        setProductos(productos.filter((p) => p._id !== agregarProducto._id));
        setAgregarProducto({});
    };

    const eliminarProducto = (eliminar) => {
        setAgregarFila(agregarFila.filter((f) => f._id !== eliminar._id));
        setProductos([...productos, eliminar]);
    };

    const modificarProducto = (producto, cantidadProducto) => {
        setAgregarFila(
            agregarFila.map((aF) => {
                if (aF.idProducto === producto.idProducto) {
                    aF.cantidadProducto = cantidadProducto;
                    aF.totalVenta = producto.precioUnitario * cantidadProducto;
                }
                return aF;
            })
        );
    };

    return (
        <div>
            <div className="w-1/2 justify-center">
                <label className="pl-3 " htmlFor="nombreProducto">Nombre Producto</label>
                <div className="inline-flex w-full">
                    <select
                        className="input"
                        type="text"
                        name="nombreProducto"
                        value={agregarProducto._id ?? ""}
                        onChange={(e) => setAgregarProducto(productos.filter((p) => p._id === e.target.value)[0])}
                    >
                        <option value="" disabled>
                            Seleccione un Producto
                        </option>
                        {productos.map((e) => {
                            return (
                                <option key={nanoid()} value={e._id}>{`${e.nombreProducto}`}</option>
                            );
                        })}
                    </select>
                    <button onClick={() => otroProducto()}>
                        <i className="fas fa-plus px-2 py-3"></i>
                    </button>
                </div>
            </div>


            <table className=" tabla">
                <thead>
                    <tr >
                        <th>Id Producto</th>
                        <th>Nombre Producto</th>
                        <th>Descripcion</th>
                        <th>Precio Unitario</th>
                        <th>Cantidad</th>
                        <th>Total Venta</th>
                        <th>Accion</th>
                        <th className="hidden">Input</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {agregarFila.map((prod, index) => {
                        return (
                            <FilaProducto
                                key={prod._id}
                                prd={prod}
                                index={index}
                                eliminarProducto={eliminarProducto}
                                modificarProducto={modificarProducto}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>

    );
};

const FilaProducto = ({ prd, index, eliminarProducto, modificarProducto }) => {
    const [producto, setProducto] = useState(prd);
    useEffect(() => {
        console.log('prd', producto);
    }, [producto]);
    return (
        <tr>
            <td>{producto.idProducto}</td>
            <td>{producto.nombreProducto}</td>
            <td>{producto.descripcionProducto}</td>
            <td>{producto.precioUnitario}</td>
            <td>
                <label htmlFor={`cantidadProducto-${index}`}></label>
                {/* <input
                    className="input"
                    type="number"
                    value={producto.cantidadProducto}
                    name={`cantidadProducto-${index}`}
                    onChange={(e) => {
                        modificarProducto(producto, e.target.value === "" ? "0" : e.target.value);
                        setProducto({
                            ...producto,
                            cantidadProducto: e.target.value === "" ? "0" : e.target.value,
                            totalVenta: parseFloat(producto.precioUnitario) * parseFloat(e.target.value === "" ? "0" : e.target.value),
                        });
                    }}
                /> */}
            </td>
            <td>{parseFloat(producto.totalVenta ?? 0)}</td>
            <td><i onClick={() => eliminarProducto(producto)} className="fas fa-minus px-3 bg-paleta3"></i></td>
            <td><input hidden defaultValue={producto._id} name={`producto-${index}`} type="text" /></td>

        </tr>
    );

}

export default Ventas;




