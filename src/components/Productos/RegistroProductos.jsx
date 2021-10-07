import React from 'react'
import Footer from '../Generales/Footer'
import Header from '../Generales/Header'
import Titulo from '../Generales/Titulo'
const RegistroProductos = () => {
    return (
        <>
            <Header />
            <form className="container col-lg-12 d-flex position-absolute top-50 start-50 translate-middle   my-4">
                <div className="row justify-content-center">
                    <Titulo nombre="Registro Productos" />
                    <div className="form-group col-lg-3 mb-3">
                        <label for="inputIdProducto">Identificador del producto</label>
                        <input type="text" className="form-control" id="inputIdProducto" placeholder="Ingrese Id del producto" />
                    </div>
                    <div className="form-group col-lg-3 mb-3">
                        <label for="inputValorUnitario">Valor Unitario</label>
                        <input type="text" className="form-control" id="inputValorUnitario" placeholder="Ingrese valor" />
                    </div>
                    <div className="form-group col-lg-3 mb-3">
                        <label for="selectEstado">Estado</label>
                        <select id="selectEstado" class="form-control mb-3">
                            <option selected>Selecciona Estado</option>
                            <option value="Disponible">Disponible</option>
                            <option value="No Disponible">No Disponible</option>
                        </select>
                        <div className="invalid-feedback">Seleccione una opción
                        </div>
                    </div>
                    <div className="form-group col-lg-9 mb-3 ">
                        <label for="formDescripcionProducto">Descripción del producto</label>
                        <textarea className="form-control" style={{ resize: 'none' }} id="formDescripcionProducto" placeholder="Escribe una descripción" rows="3"></textarea>
                    </div>
                    <div className=" d-flex justify-content-center">
                        <button type="submit" className="col-lg-3 rounded-pill m-3">Registrar</button>
                    </div>

                </div>
            </form>
            <Footer />
        </>
    );
}

export default RegistroProductos;