import React, { Component } from 'react';
import '../styles/GestionUsuariosRoles.css';
import { Link } from "react-router-dom";


export default class GestionUsuariosRoles extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Moda Express</h1>
                </header>

                <section className="padre">
                    <div className="principal">
                        <div className="titulo">
                            <h2>
                                Gestión Usuarios y Roles
                            </h2>
                        </div>
                        <div>
                            <label className="datos"for="id">Id</label>
                            <input className="datos" type="text" name="id" id="id"></input>
                            <label className="datos" for="Usuario">Usuario</label>
                            <input className="datos" type="text" name="Usuario" id="Usuario"></input>
                        </div>
                        <div>
                            <label className="datos2" for="roles">Roles</label>
                            <select className="datos2" name="roles" id="roles">
                                <option disabled="">Seleccionar rol</option>
                                <option value="Administrador">Administrador</option>
                                <option value="Vendedor">Vendedor</option>
                            </select>
                            <label  className="datos2" for="roles">Estado</label>
                            <select className="datos2" name="estado" id="estado">
                                <option disabled="">Seleccionar Estado</option>
                                <option value="Pendiente">Pendiente</option>
                                <option value="Autorizado">Autorizado</option>
                                <option value="No-autorizado">No autorizado</option>
                            </select>
                        </div>
                        <div className="boton">
                            <Link to="/">  {/* Modificar estado del usuario */}
                                <button >Guardar</button>
                            </Link>
                        </div>
                    </div>
                </section>

                <footer>21st Century Developers</footer>
            </div>
        )
    }
}
