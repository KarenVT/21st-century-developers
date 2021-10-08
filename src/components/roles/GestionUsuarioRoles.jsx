import React from 'react'
import Titulo from '../Generales/Titulo'

const GestionUsuarioRoles = () => {
    return (
        <>
            <form className="container col-lg-8 d-flex position-absolute top-50 start-50 translate-middle  my-4">
                <div className="row justify-content-center">
                    <Titulo nombre="Gestión de Roles" />
                    <div className="form-group col-lg-6 mb-3">
                        <label for="inputIdProducto">Id</label>
                        <input type="text" className="form-control" id="inputIdProducto" placeholder="Ingrese Id" />
                    </div>
                    <div className="form-group col-lg-3  mb-3">
                        <label for="selectRoles">Roles</label>
                        <select id="selectRoles" class="form-control mb-3">
                            <option selected>Selecciona Rol</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Vendedor">Vendedor</option>
                        </select>
                        <div className="invalid-feedback">Seleccione una opción</div>
                    </div>
                    <div className="form-group col-lg-6 mb-3">
                        <label for="inputIdProducto">Usuario</label>
                        <input type="text" className="form-control" id="inputIdProducto" placeholder="Ingrese Id" />
                    </div>
                    <div className="form-group col-lg-3 mb-3">
                        <label for="selectEstado">Estado</label>
                        <select id="selectEstado" class="form-control mb-3">
                            <option selected>Selecciona Estado</option>
                            <option value="Pendiente">Pendiente</option>
                            <option value="Autorizado">Autorizado</option>
                            <option value="No Autorizado">No Autorizado</option>
                        </select>
                        <div className="invalid-feedback">Seleccione una opción</div>
                    </div>
                    <div className=" d-flex justify-content-center ">
                        <button className="col-lg-3 rounded-pill m-2">Guardar</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default GestionUsuarioRoles;