import React, { Component } from 'react';
import '../../styles/RegistroProductos.css';

export default class RegistroProductos extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Moda Express</h1>
                </header>
                <section className="contenedor1">
                    <div action="" className="form">
                        <div className="titulo">
                            <h2>Registro de productos</h2>
                        </div>

                        <label for="Identificador" className="form-label"> Identificador del producto</label>
                        <input type="text" className="form-input" placeholder=""></input>

                        <label for="descripción" className="form-label"> Descripción del producto</label>
                        <textarea id="mensaje" className="form-textarea" placeholder=" "></textarea>

                        <label for="dirección" className="form-label"> Valor unitario</label>
                        <input type="text" id="dirección" className="form-input" placeholder=""></input>


                        <label for="estado" className="form-label"> Estado</label>
                        <select name="Estado" className="form-input">
                            <label for="Estado" className="form-label"> Estado </label>
                            <option value="Disponible">Seleccione su estado</option>
                            <option value="Disponible">Disponible</option>
                            <option value="No Disponible"> No Disponible</option>

                        </select>

                        <input type="submit" value="Guardar" className="btn-submit" ></input>
                    </div>
                </section>
                <div className="pie-de-pagina">
                    <footer> 21st Century Developers </footer>
                </div>
            </div>
        )
    }
}
