import React, { useState, useEffect } from 'react';
import { getUsuarios, patchUsuarios, } from '../../../utils/apis/Usuarios';
import { nanoid } from 'nanoid';


const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            await getUsuarios(
                (respuesta) => {
                    console.log('usuarios', respuesta.data);
                    setUsuarios(respuesta.data);
                },
                (err) => {
                    console.log(err);
                }
            );
        };
        fetchUsuarios();
    }, []);

    return (
        <div className="flex h-auto w-full flex-col items-center justify-start p-10">
            <div className="flex flex-col items-center">
                <h1 className="bg-paleta5 bg-opacity-50 text-4xl m-5 p-5 text-paleta6">
                    Área de Administración de Usuarios
                </h1>
                {/* <PrivateComponent roleList={['admin']}>
        <button className='bg-red-400'>Hola RBAC</button>
      </PrivateComponent> */}
                <div className='bg-white px-6 py-3 shadow-2xl'>
                    <div>
                        <h2 className='text-3xl text-center p-5 text-principal '>Listado de Usuarios</h2>
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

            const RolesUsuario = ({user}) => {
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

            const EstadoUsuario = ({user}) => {
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
