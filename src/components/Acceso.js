import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Acceso.css';

export default class Acceso extends Component {
    render() {
        return (
            <div className="fondo">
                <header>
                    <h1>Moda Express</h1>
                </header>
                <section class="padre">
                    <form class="formulario">
                        <div class="titulo">
                            <h2>User Login</h2>
                        </div>
                        <table>
                            <tr>
                                <td>
                                    Usuario
                                    <input type="text" placeholder="Usuario"></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Contraseña
                                    <input type="password" placeholder="Contraseña"></input>
                                </td>
                            </tr>
                        </table>
                        <div>
                            <Link to="/">
                                <button >Ingresar</button>
                            </Link>
                        </div>

                        <div>
                            <Link to="/">  {/* Agregar enlace con Gmail*/}
                                <button >Ingresar por Gmail</button>
                            </Link>
                        </div>

                    </form>
                </section>

                <footer> 21st Century Developers</footer>

            </div>
        )
    }
}
