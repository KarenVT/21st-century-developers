import React from 'react'
import Titulo from '../Generales/Titulo'
const ListaVentas = () => {
    return (
        <>
            <div className="container col-lg-12 d-flex flex-column">
                <Titulo nombre="Ventas Realizadas" />
                <table class="table table-borderless d-flex col-md-8 justify-content-center">
                    <thead>
                        <tr>
                            <th>
                                <label for="inputIdProducto">Id Producto</label>
                                <input type="text" className="form-control" id="inputIdProducto" placeholder="123" />
                            </th>
                            <th>
                                <label for="inputFecha">Fecha</label>
                                <input type="date" className="form-control" id="inputFecha" />
                            </th>
                            <th>
                                <label for="inputNombreCliente">Nombre Cliente</label>
                                <input type="text" className="form-control" id="inputNombreCliente" placeholder="123" />
                            </th>
                            <th>
                                <label for="inputProducto">Producto</label>
                                <input type="text" className="form-control" id="inputProducto" placeholder="Vestido" />
                            </th>
                        </tr>
                        <tr>
                            <th scope="col"></th>

                            <th scope="col">
                                <div className=" d-flex justify-content-center">
                                    <button className="col-lg-8 rounded-pill m-3">Buscar</button>
                                </div>
                            </th>
                            <th scope="col">
                                <div className=" d-flex justify-content-center">
                                    <button className="col-lg-8 rounded-pill m-3">Actualizar</button>
                                </div>
                            </th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                </table>

                <table class="table table-borderless col-md-12 justify-content-center">

                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Nombre Cliente</th>
                            <th scope="col">Producto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td >Larry the Bird</td>
                            <td >Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListaVentas;