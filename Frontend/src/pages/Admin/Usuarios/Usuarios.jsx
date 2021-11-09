import React, { useState, useEffect } from 'react';
import { getUsuarios, patchUsuarios, deleteUsuarios } from '../../../utils/apis/Usuarios';
import { nanoid } from 'nanoid';
import PrivateComponent from "../../../components/PrivateComponent";



const Usuarios = ({ rol }) => {
    const [usuarios, setUsuarios] = useState([]);
    const [ActualizarDatos, setActualizarDatos] = useState(true);

    useEffect(() => {
        const fetchUsuarios = async () => {
            await getUsuarios(
                (respuesta) => {
                    console.log('usuarios', respuesta.data);
                    setUsuarios(respuesta.data);
                    setActualizarDatos(false);
                },
                (err) => {
                    console.log(err);
                }
            );
        };
        if (ActualizarDatos) {
            fetchUsuarios();
        }
    }, [ActualizarDatos]);


    return (
        <div className="flex flex-col items-center justify-start p-10">
            <div className="flex flex-col items-center">
                <h1 className="bg-paleta5 bg-opacity-50 text-4xl m-5 p-5 text-paleta6">
                    Área de Administración de Usuarios
                </h1>
                <div className='bg-white px-6 py-3 shadow-2xl mx-auto'>
                    <div>
                        <h2 className='text-3xl text-center p-5 text-principal '>Listado de Productos</h2>
                    </div>
                    <div className='flex justify-around items-center'>
                        <table className='tabla'>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Estado</th>
                                    <th>Rol</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map((user) => {
                                    return (
                                        <tr key={nanoid()}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                <EstadoUsuario user={user} />
                                            </td>
                                            <td>
                                                <RolesUsuario user={user} />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <table className='tabla'>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Estado</th>
                                <th>Rol</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((user) => {
                                return (
                                    <tr key={nanoid()}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <EstadoUsuario user={user} />
                                        </td>
                                        <td>
                                            <RolesUsuario user={user} />
                                        </td>   

                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const RolesUsuario = ({ user }) => {
    const [rol, setRol] = useState(user.rol);

    useEffect(() => {
        const editUsuario = async () => {
            await patchUsuarios(
                user._id,
                { rol },
                (res) => {
                    console.log(res);
                },
                (err) => {
                    console.error(err);
                }
            );
        };
        //este codigo sirve para que el en la base de datos directamente cambie el estado del usuario
        if (user.rol !== rol) {
            editUsuario();
        }
    }, [rol, user]);



    return (
        <select className='input' value={rol} onChange={(e) => setRol(e.target.value)}>
            <option value='' disabled>
                Seleccione un rol
            </option>
            <option value='admin'>Admin</option>
            <option value='vendedor'>Vendedor</option>
            <option value='sin rol'>Sin rol</option>
        </select>
    );
};
//estados de usuario
const EstadoUsuario = ({ user }) => {
    const [estado, setEstado] = useState(user.estado ?? '');

    useEffect(() => {
        const editUsuario = async () => {
            await patchUsuarios(
                user._id,
                { estado },
                (res) => {
                    console.log(res);
                },
                (err) => {
                    console.error(err);
                }
            );
        };
        if (user.estado !== estado) {
            editUsuario();
        }
    }, [estado, user]);

    return (
        <select className='input' value={estado} onChange={(e) => setEstado(e.target.value)}>
            <option value='' disabled>
                Seleccione un estado
            </option>
            <option value='autorizado' className='text-principal'>
                Autorizado
            </option>
            <option value='pendiente' className='text-principal'>
                Pendiente
            </option>
            <option value='rechazado' className='text-principal'>
                Rechazado
            </option>
        </select>
    );
};
export default Usuarios;
