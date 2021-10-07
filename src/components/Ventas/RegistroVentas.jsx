import React from 'react'
import Footer from '../Generales/Footer'
import Header from '../Generales/Header'
import Titulo from '../Generales/Titulo'
const RegistroVentas = () => {
    return (
        <>
            <Header/>
            <form className="container col-lg-12 d-flex position-absolute top-50 start-50 translate-middle my-4"  >
               
                <div className="row">
                <Titulo nombre="Registros de Ventas"/>
                    <div className="form-group col-md-6">
                        <label for="inputFecha">Fecha</label>
                        <input type="date" className="form-control" id="inputFecha" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputIdProducto">Id producto</label>
                        <input type="text" className="form-control" id="inputIdProducto" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputId">Id Cliente</label>
                        <input type="text" className="form-control" id="inputId" placeholder="Id" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputCantidaProducto">Cantidad Producto</label>
                        <input type="text" className="form-control" id="inputCantidaProducto" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputNombreCliente">Nombre Cliente</label>
                        <input type="text" className="form-control" id="inputNombreCliente" placeholder="Juan Hernandez" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPrecioUnitario">Precio unitario</label>
                        <input type="text" className="form-control" id="inputPrecioUnitario" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputNombreVendedor">Nombre Vendedor</label>
                        <input type="text" className="form-control" id="inputNombreVendedor" placeholder="Andrés Herrera" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputTotalVenta">Total Venta</label>
                        <input type="text" className="form-control" id="inputTotalVenta" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputIdentificador">Identificador</label>
                        <input type="text" className="form-control" id="inputIdentificador" />
                    </div>
                    <div className=" d-flex justify-content-center">
                    <button type="submit" className="col-lg-3 rounded-pill m-3">Registrar</button>
                </div>
                </div>
            </form>
            <Footer/>
        </>
        
    );
}

export default RegistroVentas;

