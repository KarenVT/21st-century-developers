import React, { Component } from 'react';
import '../styles/RegistroDeVentas.css';

export default class RegistroDeVentas extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Moda Express</h1>
                </header>

                <section class="padre2">
                    <table class="formulario2">
                        <tr>
                            <td>
                                <blockquote></blockquote>
                                Fecha
                                <blockquote></blockquote>
                                <input type="date" placeholder=""></input>
                            </td>
                        </tr>
                        <tr>

                            <td>
                                <blockquote></blockquote>
                                Id del cliente
                                <blockquote></blockquote>
                                <input type="text" placeholder=""></input>
                            </td>
                        </tr>
                        <tr>

                            <td>
                                <blockquote></blockquote>
                                Nombre del cliente
                                <blockquote></blockquote>
                                <input type="text" placeholder=""></input>
                            </td>
                        </tr>
                        <tr>

                            <td>
                                <blockquote></blockquote>
                                Nombre vendedor
                                <blockquote></blockquote>
                                <input type="text" placeholder=""></input>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <blockquote></blockquote>
                                Identificador
                                <blockquote></blockquote>
                                <input type="text" placeholder=""></input>
                            </td>
                        </tr>
                    </table>
                    <div class="bloque2">

                        <tr>
                            <td>
                                Id producto
                                <blockquote></blockquote>
                                <input type="text" placeholder=""></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <blockquote></blockquote>
                                Cantidad producto
                                <blockquote></blockquote>
                                <input type="text" placeholder=""></input>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <blockquote></blockquote>
                                Precio unitario
                                <blockquote></blockquote>
                                <input type="text" placeholder=""></input>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <blockquote></blockquote>
                                Total de la venta
                                <blockquote></blockquote>
                                <input type="text" placeholder=""></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <button className="boton2"> Registrar </button>
                            </td>
                        </tr>
                    </div>
                </section>

                <footer> 21st Century Developers</footer>
            </div>
        )
    }
}

