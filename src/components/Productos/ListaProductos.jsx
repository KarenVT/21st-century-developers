import React from 'react'
import Footer from '../Generales/Footer'
import Header from '../Generales/Header'
import Titulo from '../Generales/Titulo'

const ListaProductos = () => {
    return (
        <>
            <Header />

            <div className="container col-lg-12 d-flex flex-column my-4">
                <Titulo nombre="Lista Productos" />
                <table class="table table-borderless d-flex col-md-8 justify-content-center">
                    <tbody>
                        <tr>
                            <th scope="col">
                                <label for="inputIdProducto">Id Producto</label>
                                <input type="text" className="form-control" id="inputIdProducto" placeholder="Ingrese el Id" />
                            </th>
                            <th scope="col">
                                <label for="selectEstado">Estado</label>
                                <select id="selectEstado" class="form-control w-100">
                                    <option selected>Selecciona Estado</option>
                                    <option value="Disponible">Disponible</option>
                                    <option value="No Disponible">No Disponible</option>
                                </select>
                            </th>
                            <th scope="col"></th>
                            <th scope="col">
                                <label for="inputValorUnitario">Valor Unitario</label>
                                <input type="text" className="form-control" id="inputValorUnitario" placeholder="Ingrese un valor" />
                            </th>
                        </tr>
                        <tr>

                            <th scope="col">
                                <div className=" d-flex justify-content-center">
                                    <button className="col-lg-8 rounded-pill m-3">Buscar</button>
                                </div>
                            </th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">
                                <div className=" d-flex justify-content-center">
                                    <button className="col-lg-8 rounded-pill m-3">Actualizar</button>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>

                <table class="table table-borderless col-md-12 justify-content-center">

                    <thead>
                        <tr>
                            <th scope="col">Id Producto</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Valor Unitario</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>

                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td >Larry the Bird</td>
                            <td >Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
}

export default ListaProductos;