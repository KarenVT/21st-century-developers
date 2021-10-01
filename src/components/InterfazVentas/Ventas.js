import React, { Component } from 'react'
import '../../styles/Ventas.css';
export default class Ventas extends Component {
    render() {
        return (
            <div>
            <header>
                    <h1>Moda Express</h1>
                </header>

                <section className="padre2">
                    <table className="formulario2">
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
                            <button classNameName="boton2"> Registrar </button>
                            </td>
                        </tr>
                        </table>
                </section>

                <footer> 21st Century Developers</footer>
            </div>
        )
    }
}
