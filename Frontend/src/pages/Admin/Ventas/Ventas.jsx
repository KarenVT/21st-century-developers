import React, { useEffect, useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import { getVentas, postVentas, patchVentas, deleteVentas, } from '../../../utils/apis/Ventas';
import { getUsuarios } from '../../../utils/apis/Usuarios';
import { getProductos } from '../../../utils/apis/Productos';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Ventas = () => {
    const [vendedores, setVendedores] = useState([]);
    const [productos, setProductos] = useState([]);
    const [ListaTabla, setListaTabla] = useState([]);
    const [mostrarLista, setMostrarLista] = useState(true);
    const [ventas, setVentas] = useState([]);
    const [ActualizarDatos, setActualizarDatos] = useState(true);

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


        console.log("listaProdcutos con ventas", listaProductos);
        const InfoVentas = {
            id: nuevaVenta.id,
            fecha: nuevaVenta.fecha,
            idCliente: nuevaVenta.idCliente,
            cantidadProducto: nuevaVenta.cantidadProducto,
            nombreCliente: nuevaVenta.nombreCliente,
            nombreVendedor: vendedores.filter((v) => v._id === nuevaVenta.nombreVendedor)[0],
            totalVenta: nuevaVenta.totalVenta,
            nombreProducto: listaProductos,
        };

        await postVentas(InfoVentas,
            (response) => {
                console.log(response.data);
                setActualizarDatos(true);
            },
            (error) => {
                console.error(error);
            }
        );
        setMostrarLista(true)
    };

    useEffect(() => {
        getVentas(
            (response) => {
                setVentas(response.data);
                setActualizarDatos(false);
            },
            (error) => {
                console.error(error);
            }
        );
        if (ActualizarDatos) {
            getVentas();
        }
    }, [ActualizarDatos])

    useEffect(() => {
        if (mostrarLista) {
            setActualizarDatos(true);
        }
    }, [mostrarLista]);

    return (
        <div className="flex h-auto w-full flex-col items-center justify-start p-10">
            {mostrarLista ? (
                <ListVentas
                    listaVentas={ventas}
                    // setActualizarDatos={setActualizarDatos} 
                    setMostrarLista={setMostrarLista}
                    productos={productos}
                    vendedores={vendedores}
                    listaProductos={productos}
                    listaVendedores={vendedores}
                    ventas={ventas}

                />
            ) : (
                <div className="flex h-auto w-full flex-col items-center justify-start p-10">
                    <div className="flex flex-col items-center">
                        <h1 className="bg-paleta5 bg-opacity-50 text-4xl m-5 p-5 text-paleta6">
                            Área de Administración de Ventas
                        </h1>
                        <form ref={form} onSubmit={submitForm} className=" bg-white px-6 py-3 shadow-2xl">
                            <div>
                                <h2 className="text-3xl text-center p-5 text-principal ">Registro de Ventas</h2>
                            </div>
                            <div className="flex space-x-4 mb-3 justify-center">

                                <ListProductos
                                    productos={productos} setProductos={setProductos} setListaTabla={setListaTabla} />

                            </div>
                            <div className="flex space-x-4 mb-3 justify-center">
                                <div className="w-1/3">
                                    <label className="pl-3" htmlFor="id">Identificador</label>
                                    <input
                                        className="input"
                                        type="number"
                                        name="id"
                                        min={0}
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
                                        min={0}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex space-x-4 mb-3 justify-center">
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
                                                <option key={nanoid()} value={e._id}>{`${e.name}`}</option>
                                            );
                                        })}
                                    </select>
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
                                        onClick={() => {
                                            setMostrarLista(!mostrarLista)
                                        }}
                                        className="boton w-full"
                                    > Lista de Ventas
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );

};

// elegir más de un producto
const ListProductos = ({ productos, setProductos, setListaTabla }) => {
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
                    <button
                        onClick={() => {
                            otroProducto()

                        }
                        }>
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
                    {agregarFila.map((prd, index) => {
                        return (
                            <FilaProducto
                                key={prd._id}
                                prd={prd}
                                index={index}
                                eliminarProducto={eliminarProducto}
                                modificarProducto={modificarProducto}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div >

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
                <input
                    className="input"
                    type="number"
                    min={0}
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
                />
            </td>
            <td>{parseFloat(producto.totalVenta ?? 0)}</td>
            <td><i onClick={() => eliminarProducto(producto)} className="fas fa-minus px-3 bg-paleta3"></i></td>
            <td><input hidden defaultValue={producto._id} name={`producto-${index}`} type="text" /></td>

        </tr>
    );

}

const ListVentas = ({ listaVentas, setActualizarDatos, setMostrarLista, mostrarLista, productos, ventas, vendedores, listaVendedores, listaProductos, modificarProducto }) => {

    const [buscador, setBuscador] = useState('');
    const [filtroVentas, setFiltroVentas] = useState(listaVentas);

    useEffect(() => {
        setFiltroVentas(
            listaVentas.filter(elemento => {
                console.log('elemento', elemento);
                return JSON.stringify(elemento).toLowerCase().includes(buscador.toLowerCase());
            })
        );
        console.log('lista de elementos', listaVentas);

    }, [buscador, listaVentas, listaProductos, listaVendedores]);

    return (
        <>
            <div className='bg-white px-6 py-3 shadow-2xl'>
                <div>
                    <h2 className='text-3xl text-center p-5 text-principal '>Listado de Ventas</h2>
                </div>
                <div className='flex justify-evenly items-center'>

                    <div className=''>
                        <input
                            value={buscador}
                            onChange={(e) => setBuscador(e.target.value)}
                            type='text'
                            className='rounded-full h-10 w-60 p-2 m-2 border border-gray-400  focus:outline-none focus:border-transparent focus:ring focus:ring-principal shadow-lg'
                            placeholder='Bucar Venta'
                        />
                    </div>
                    <div className=''>
                        <button
                            onClick={() => {
                                setMostrarLista(mostrarLista)
                            }}
                            className='w-60 boton'
                        > Registrar Venta
                        </button>
                    </div>
                </div>
                <div className=''>
                    <table className=' tabla'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>fecha</th>
                                <th>Id Cliente</th>
                                <th>Nombre Cliente</th>
                                <th>Nombre Vendedor</th>
                                <th>Id Producto</th>
                                <th>Nombre Producto</th>
                                <th>Precio Unitario</th>
                                <th>Cantidad Venta</th>
                                <th>Total Venta</th>
                                <th >Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtroVentas.map((ventas, index) => {

                                return (
                                    <EditarVenta key={nanoid()} ventas={ventas} setActualizarDatos={setActualizarDatos} productos={productos} modificarProducto={modificarProducto} index={index}
                                        vendedores={vendedores} listaVentas={ventas}
                                    />
                                )

                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};


const EditarVenta = ({ ventas, setActualizarDatos, productos, index, vendedores, listaVentas}) => {
    const [total, setTotal] = useState([]);
    const [editar, setEditar] = useState(false);
    const [datosVentasEditadas, setDatosVentasEditadas] = useState({
        
        _id: ventas._id,
        id: ventas.id,
        fecha: ventas.fecha,
        idCliente: ventas.idCliente,
        nombreCliente: ventas.nombreCliente,
        nombreVendedor: ventas.nombreVendedor.name,
        idProducto: ventas.nombreProducto[0].idProducto,
        nombreProducto: ventas.nombreProducto[0].nombreProducto,
        cantidadProducto: ventas.nombreProducto[0].cantidadProducto,
        precioUnitario: ventas.nombreProducto[0].precioUnitario,
        totalVenta: ventas.nombreProducto[0].totalVenta
    });
    
    
    


        
        console.log('elo', datosVentasEditadas);
    
    const editarProducto = async () => {
        // Patch - editar datos - Enviar al Backend
        await patchVentas(ventas._id,
            {
                id: datosVentasEditadas.id,
                fecha: datosVentasEditadas.fecha,
                idCliente: datosVentasEditadas.idCliente,
                nombreCliente: datosVentasEditadas.nombreCliente,
                nombreVendedor: vendedores.filter((v) => v._id === datosVentasEditadas.nombreVendedor)[0],
                
                nombreProducto: [
                    {
                        "idProducto": datosVentasEditadas.idProducto,
                        "nombreProducto": datosVentasEditadas.nombreProducto,
                        "precioUnitario": datosVentasEditadas.precioUnitario,
                        "cantidadProducto": datosVentasEditadas.cantidadProducto,
                        "totalVenta": datosVentasEditadas.totalVenta
                    }
                ],
              
            },
            (response) => {
                console.log(response.data);
                setEditar(false);
            },
            (error) => {
                console.error(error);
            }
        );

    }

    const eliminarVenta = async () => {

        await deleteVentas(
            ventas._id,
            (response) => {
                console.log(response.data);

            },
            (error) => {
                console.error(error);
            }
        );
    }

    const modificarTotal = (datosVentasEditadas, cantidadProducto) => {
        setTotal(
            total.map((aF) => {
                if (aF.id === datosVentasEditadas.id) {
                    aF.cantidadProducto = cantidadProducto;
                    aF.totalVenta = datosVentasEditadas.precioUnitario * cantidadProducto;
                }
                return aF;
            })
        );
    };

    return (
        <tr>
            {
                // campos para editar los datos de Productos ya registrados
                editar ? (
                    <>
                        <td><input name='id' type="number" className='m-2 input'
                            value={datosVentasEditadas.id}
                            onChange={(e) => setDatosVentasEditadas({ ...datosVentasEditadas, id: e.target.value })}
                        />
                        </td>
                        <td><input name='fecha' type="date" className='input'
                            value={datosVentasEditadas.fecha}
                            onChange={(e) => setDatosVentasEditadas({ ...datosVentasEditadas, fecha: e.target.value })}
                        /></td>
                        <td><input name='idCliente' className='input' type='number'
                            value={datosVentasEditadas.idCliente}
                            onChange={(e) => setDatosVentasEditadas({ ...datosVentasEditadas, idCliente: e.target.value })}
                        />
                        </td>
                        <td><input name='nombreCliente' type="text" className='input'
                            value={datosVentasEditadas.nombreCliente}
                            onChange={(e) => setDatosVentasEditadas({ ...datosVentasEditadas, nombreCliente: e.target.value })}
                        />
                        </td>
                        <td>
                            <select
                                className="input"
                                type="text"
                                name="nombreVendedor"
                                defaultValue=""
                                value={datosVentasEditadas.nombreVendedor}
                                onChange={(e) => setDatosVentasEditadas({ ...datosVentasEditadas, nombreVendedor: e.target.value })}
                            >
                                <option value="" disabled>
                                    Seleccione un Vendedor
                                </option>
                                {vendedores.map((e) => {
                                    return (
                                        <option key={nanoid()} value={e._id}>{`${e.name}`}</option>
                                    );
                                })}
                            </select>
                        </td>
                        <td><input name='idProducto' type="number" className='input'
                            value={datosVentasEditadas.idProducto}
                            onChange={(e) => setDatosVentasEditadas({ ...datosVentasEditadas, idProducto: e.target.value })}
                        />
                        </td>
                        <td>
                            <select
                                className="input"
                                type="text"
                                name="nombreProducto"
                                value={datosVentasEditadas.nombreProducto}
                                onChange={(e) => setDatosVentasEditadas({ ...datosVentasEditadas, nombreProducto: e.target.value })}
                            >
                                <option value="" disabled>
                                    Seleccione un Producto
                                </option>
                                {productos.map((e) => {
                                    return (
                                        <option key={nanoid()}>{`${e.nombreProducto}`}</option>
                                    );
                                })}
                            </select>
                        </td>
                        <td><input name='precioUnitario' type="number" className='input'
                            value={datosVentasEditadas.precioUnitario}
                            onChange={(e) => setDatosVentasEditadas({ ...datosVentasEditadas, precioUnitario: e.target.value })}
                        /></td>

                        <td>
                            <input
                                className="input"
                                type="number"
                                value={datosVentasEditadas.cantidadProducto}
                                name={`cantidadProducto-${index}`}
                                onChange={(e) => {
                                    modificarTotal(datosVentasEditadas, e.target.value === "" ? "0" : e.target.value);
                                    setDatosVentasEditadas({
                                        ...datosVentasEditadas,
                                        cantidadProducto: e.target.value === "" ? "0" : e.target.value,
                                        totalVenta: parseFloat(datosVentasEditadas.precioUnitario) * parseFloat(e.target.value === "" ? "0" : e.target.value),
                                    });
                                }}
                            />
                        </td>
                        <td>{parseFloat(datosVentasEditadas.totalVenta ?? 0)}</td>
                    </>
                ) : (
                    <>
                        <td>{ventas.id}</td>
                        <td>{ventas.fecha}</td>
                        <td>{ventas.idCliente}</td>
                        <td>{ventas.nombreCliente}</td>
                        <td>{`${ventas.nombreVendedor.name}`}</td>
                        <td>{`${ventas.nombreProducto[0].idProducto}`}</td>
                        <td>{`${ventas.nombreProducto[0].nombreProducto}`}</td>
                        <td>{`${ventas.nombreProducto[0].precioUnitario} `}</td>
                        <td>{`${ventas.nombreProducto[0].cantidadProducto}`}</td>
                        <td>{`${ventas.nombreProducto[0].totalVenta}`}</td>
                    </>
                )
            }
            <td className="bg-paleta3">
                <div className="flex w-full justify-around ">
                    {
                        editar ? (
                            <>
                                <i
                                    onClick={() => { editarProducto() }}
                                    className="fas fa-check-square text-green-700 hover:text-green-900"
                                />
                                <i
                                    onClick={() => setEditar(!editar)}
                                    className='fas fa-ban text-red-700 hover:text-red-900'
                                />

                            </>

                        ) : (
                            <>
                                <i
                                    onClick={() => { setEditar(!editar) }}
                                    className="fas fa-edit text-paleta6 hover:text-blue-700" />
                                <i onClick={() => { eliminarVenta() }} className="fas fa-trash text-paleta6 hover:text-red-600" />
                            </>
                        )
                    }
                </div>
            </td>
        </tr>
    );
}

export default Ventas;



