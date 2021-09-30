import React, { Component } from 'react';
import '../styles/GestionUsuariosRoles.css';


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
                        <label for="id">Id</label>
                        <input className="datos" type="text" name="id" id="id"></input>
                        <label className="datos" for="Usuario">Usuario</label>
                        <input className="datos" type="text" name="Usuario" id="Usuario"></input>
                        <label for="roles">Roles</label>
                        <select className="datos" name="roles" id="roles">
                            <option disabled="">Seleccionar rol</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Vendedor">Vendedor</option>
                        </select>
                        <label for="roles">Estado</label>
                        <select className="datos" name="estado" id="estado">
                            <option disabled="">Seleccionar Estado</option>
                            <option value="Pendiente">Pendiente</option>
                            <option value="Autorizado">Autorizado</option>
                            <option value="No-autorizado">No autorizado</option>
                        </select>
                    </div>
                </section>

                <footer>21st Century Developers</footer>
            </div>
        )
    }
}
