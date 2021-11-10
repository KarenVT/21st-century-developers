import React, { useEffect, useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import { getProductos, postProductos, patchProductos, deleteProductos } from '../../../utils/apis/Productos';
import PrivateComponent from '../../../components/PrivateComponent';


const Productos = () => {
    const [mostrarLista, setMostrarLista] = useState(true);
    const [productos, setProductos] = useState([]);
    const [ActualizarDatos, setActualizarDatos] = useState(true);

    useEffect(() => {
        const fetchProductos = async () => {

            await getProductos(
                (response) => {
                    setProductos(response.data);
                    setActualizarDatos(false);
                },
                (error) => {
                    console.error(error);
                }
            );
        };
        console.log('consulta', ActualizarDatos);
        if (ActualizarDatos) {
            fetchProductos();
        }
    }, [ActualizarDatos])

    useEffect(() => {
        //obtener/GET lista de Productos desde el backend
        if (mostrarLista) {
            setActualizarDatos(true);
        }
    }, [mostrarLista]);
    // console.log("mostrar:", mostrarLista, productos);


    return (
        <div className="flex h-auto w-full flex-col items-center justify-start p-10">
            <div className="flex flex-col items-center">
                <h1 className="bg-paleta5 bg-opacity-50 text-4xl m-5 p-5 text-paleta6">
                    Área de Administación de Productos
                </h1>
                {mostrarLista ? (
                    <ListProductos listaProductos={productos} setActualizarDatos={setActualizarDatos} setMostrarLista={setMostrarLista} />
                ) : (
                    <RegisProductos
                        setMostrarLista={setMostrarLista}
                        listaProductos={productos}
                        setProductos={setProductos}
                    />
                )}
                {/* <ToastContainer position='bottom-center' autoClose={5000} /> */}
            </div>

        </div>
    );
};

const RegisProductos = ({ setMostrarLista, mostrarLista, setActualizarDatos, }) => {
    const form = useRef(null);

    const submitForm = async (e) => {
        e.preventDefault();
        const fp = new FormData(form.current);
        ;
        const nuevoProducto = {};
        fp.forEach((value, key) => {
            nuevoProducto[key] = value;
        });

        await postProductos({
            idProducto: nuevoProducto.idProducto,
            nombreProducto: nuevoProducto.nombreProducto,
            descripcionProducto: nuevoProducto.descripcionProducto,
            precioUnitario: nuevoProducto.precioUnitario,
            estado: nuevoProducto.estado
        },
            (response) => {
                console.log(response.data);
                setActualizarDatos(true);
            },
            (error) => {
                console.error(error);
            }
        )
        setMostrarLista(true)
    };



    return (
        <div className=" flex justify-center items-center">
            <form ref={form} onSubmit={submitForm} className=" bg-white px-6 py-3 shadow-2xl">
                <div>
                    <h2 className="text-3xl text-center p-5 text-principal ">Registro de Productos</h2>
                </div>
                <div className="flex space-x-4 mb-3">
                    <div className="w-1/2">
                        <label className="pl-3" htmlFor="idProducto">Id Producto</label>
                        <input
                            className="input"
                            type="number"
                            name="idProducto"
                            min={0}
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="pl-3" >Nombre Producto</label>
                        <input
                            className="input"
                            type="text"
                            name="nombreProducto"
                            htmlFor="nombreProducto"
                            required
                        />
                    </div>
                </div>
                <div className="flex space-x-4 mb-3 ">
                    <div className="w-1/2">
                        <label className="pl-3" htmlFor="descripcionProducto">Descripción</label>
                        <textarea
                            className="input resize-none py-1 "
                            name="descripcionProducto"

                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="pl-3" htmlFor="precioUnitario">Precio Unitario</label>
                        <input
                            className="input"
                            type="number"

                            name="precioUnitario"
                            required
                        />
                    </div>
                </div>
                <div className="flex justify-center space-x-4 mb-3">
                    <div className="w-1/2">
                        <label className="pl-3" htmlFor="estado" >Estado</label>
                        <select className="input" name="estado" required>
                            <option value='' disabled>
                                Seleccione un estado
                            </option>
                            <option value='Disponible' className='text-principal'>
                                Disponible
                            </option>
                            <option value='No Disponible' className='text-principal'>
                                No disponible
                            </option>
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
                        > Lista de Productos
                        </button>
                    </div>

                </div>
            </form>
        </div>
    )
};

const ListProductos = ({ listaProductos, setActualizarDatos, setMostrarLista, mostrarLista }) => {

    const [buscador, setBuscador] = useState('');
    const [filtroProductos, setFiltroProductos] = useState(listaProductos);

    useEffect(() => {
        setFiltroProductos(
            listaProductos.filter(elemento => {
                console.log('elemento', elemento);
                return JSON.stringify(elemento).toLowerCase().includes(buscador.toLowerCase());
            })
        );
    }, [buscador, listaProductos]);

    return (
        <>
            <div className='bg-white px-6 py-3 shadow-2xl'>
                <div>
                    <h2 className='text-3xl text-center p-5 text-principal '>Listado de Productos</h2>
                </div>
                <div className='flex justify-around items-center'>

                    <div>
                        <input
                            value={buscador}
                            onChange={(e) => setBuscador(e.target.value)}
                            type='text'
                            className='rounded-full h-10 w-full p-2 m-2 border border-gray-400  focus:outline-none focus:border-transparent focus:ring focus:ring-principal shadow-lg'
                            placeholder='Burcar Producto'
                        />
                    </div>

                    <div className="w-2/6">
                        <button
                            onClick={() => {
                                setMostrarLista(mostrarLista)
                            }}
                            className="boton "
                        > Registrar Producto
                        </button>
                    </div>

                </div>

                <table className='tabla'>
                    <thead>
                        <tr>
                            <th>Id Producto</th>
                            <th>Nombre Producto</th>
                            <th>Descripción</th>
                            <th>Precio Unitario</th>
                            <th>Estado</th>
                            <PrivateComponent roleList={["admin"]}>
                                <th >Acciones</th>
                            </PrivateComponent>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filtroProductos.map((productos) => {
                                return (
                                    <EditarProducto key={nanoid()} productos={productos} setActualizarDatos={setActualizarDatos} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
};

const EditarProducto = ({ productos, setActualizarDatos }) => {

    const [editar, setEditar] = useState(false);
    const [datosProductoEditado, setDatosProductoEditado] = useState({
        _id: productos._id,
        idProducto: productos.idProducto,
        nombreProducto: productos.nombreProducto,
        descripcionProducto: productos.descripcionProducto,
        precioUnitario: productos.precioUnitario,
        estado: productos.estado
    });

    const editarProducto = async () => {
        // Patch - editar datos - Enviar al Backend
        await patchProductos(productos._id,
            {
                idProducto: datosProductoEditado.idProducto,
                nombreProducto: datosProductoEditado.nombreProducto,
                descripcionProducto: datosProductoEditado.descripcionProducto,
                precioUnitario: datosProductoEditado.precioUnitario,
                estado: datosProductoEditado.estado
            },
            (response) => {
                console.log(response.data);
                setEditar(false);
                setActualizarDatos(true)
            },
            (error) => {
                console.error(error);
            }
        );

    }

    const eliminarProducto = async () => {
        await deleteProductos(
            productos._id,
            (response) => {
                console.log(response.data);
                setActualizarDatos(true);
            },
            (error) => {
                console.error(error);
            }
        );

    }
    return (
        <tr>
            {
                // campos para editar los datos de Productos ya registrados
                editar ? (
                    <>
                        <td><input name='idProducto' type="number" className='input'
                            value={datosProductoEditado.idProducto}
                            onChange={(e) => setDatosProductoEditado({ ...datosProductoEditado, idProducto: e.target.value })}
                        />
                        </td>
                        <td><input name='nombreProducto' type="text" className='input'
                            value={datosProductoEditado.nombreProducto}
                            onChange={(e) => setDatosProductoEditado({ ...datosProductoEditado, nombreProducto: e.target.value })}
                        /></td>
                        <td><textarea name='descripcionProducto' className='input resize-none mt-2 py-1'
                            value={datosProductoEditado.descripcionProducto}
                            onChange={(e) => setDatosProductoEditado({ ...datosProductoEditado, descripcionProducto: e.target.value })}
                        />
                        </td>
                        <td><input name='precioUnitario' type="number" className='input'
                            value={datosProductoEditado.precioUnitario}
                            onChange={(e) => setDatosProductoEditado({ ...datosProductoEditado, precioUnitario: e.target.value })}
                        />
                        </td>
                        <td>
                            <select className="input"
                                value={datosProductoEditado.estado}
                                onChange={(e) => setDatosProductoEditado({ ...datosProductoEditado, estado: e.target.value })}
                                required>
                                <option value='' disabled>
                                    Seleccione un estado
                                </option>
                                <option value='Disponible' className='text-principal'>
                                    Disponible
                                </option>
                                <option value='No Disponible' className='text-principal'>
                                    No disponible
                                </option>
                            </select>
                        </td>

                    </>
                ) : (
                    <>
                        <td>{productos.idProducto}</td>
                        <td>{productos.nombreProducto}</td>
                        <td>{productos.descripcionProducto}</td>
                        <td>{productos.precioUnitario}</td>
                        <td>{productos.estado}</td>
                    </>
                )
            }
            <PrivateComponent roleList={["admin"]}>
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
                                    <i onClick={() => { eliminarProducto() }} className="fas fa-trash text-paleta6 hover:text-red-600" />
                                </>
                            )
                        }
                    </div>
                </td>
            </PrivateComponent>
        </tr>
    );

};


export default Productos;