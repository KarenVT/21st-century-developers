const RegistroVentas = () => {
    return (
        <div className="bg-gray-800 h-screen flex justify-center items-center ">
            <form className=" bg-white bg-opacity-70 p-10 shadow-2xl">
                <div>
                    <h1 class="text-4xl text-center pb-10 text-principal ">Account Settings</h1>
                </div>
                <div class="flex space-x-4 mb-3">
                    <div class="w-1/2">
                        <label className="pl-3" for="fecha">Fecha</label>
                        <input
                            className="rounded-full  h-10 px-2 border border-gray-400 w-full focus:outline-none focus:border-transparent focus:ring focus:ring-principal"
                            type="date"
                            name="fecha"
                            id="fecha"
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="pl-3" for="idProducto">Id Producto</label>
                        <input
                            className="rounded-full  h-10 px-2 border border-gray-400 w-full focus:outline-none focus:border-transparent focus:ring focus:ring-principal"
                            type="text"
                            name="idProducto"
                            id="idProducto"
                        />
                    </div>
                </div>
                <div className="flex space-x-4 mb-3">
                    <div className="w-1/2">
                        <label className="pl-3" for="id">Identificador</label>
                        <input
                            className="rounded-full  h-10 px-2 border border-gray-400 w-full focus:outline-none focus:border-transparent focus:ring focus:ring-principal"
                            type="text"
                            name="id"
                            id="id" />
                    </div>

                    <div className="w-1/2">
                        <label className="pl-3" for="nombreProducto">Nombre Producto</label>
                        <input
                            className="rounded-full  h-10 px-2 border border-gray-400 w-full focus:outline-none focus:border-transparent focus:ring focus:ring-principal"
                            type="text"
                            name="nombreProducto"
                            id="nombreProducto"
                        />
                    </div>
                </div>
                <div className="flex space-x-4 mb-3">
                    <div className="w-1/2">
                        <label className="pl-3" for="idCliente">Id Cliente</label>
                        <input
                            className="rounded-full  h-10 px-2 border border-gray-400 w-full focus:outline-none focus:border-transparent focus:ring focus:ring-principal"
                            type="text"
                            name="idCliente"
                            id="idCliente"
                        />
                    </div>
                   
                    <div className="w-1/2">
                        <label className="pl-3" for="cantidadProducto">Cantidad Producto</label>
                        <input
                            className="rounded-full  h-10 px-2 border border-gray-400 w-full focus:outline-none focus:border-transparent focus:ring focus:ring-principal"
                            type="text"
                            name="cantidadProducto"
                            id="cantidadProducto"
                        />
                    </div>
                </div>
                <div className="flex space-x-4 mb-3">
                <div className="w-1/2">
                        <label className="pl-3" for="nombreCliente">Nombre Cliente</label>
                        <input
                            className="rounded-full  h-10 px-2 border border-gray-400 w-full focus:outline-none focus:border-transparent focus:ring focus:ring-principal"
                            type="text"
                            name="nombreCliente"
                            id="nombreCliente"
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="pl-3" for="precioUnitario">Precio unitario</label>
                        <input
                            className="rounded-full  h-10 px-2 border border-gray-400 w-full focus:outline-none focus:border-transparent focus:ring focus:ring-principal"
                            type="text"
                            name="precioUnitario"
                            id="precioUnitario"
                        />
                    </div>
                    
                </div>
                <div className="flex space-x-4 mb-3">
                <div className="w-1/2">
                        <label className="pl-3" for="nombreVendedor">Nombre Vendedor</label>
                        <input
                            className="rounded-full  h-10 px-2 border border-gray-400 w-full focus:outline-none focus:border-transparent focus:ring focus:ring-principal"
                            type="text"
                            name="nombreVendedor"
                            id="nombreVendedor"
                        />
                    </div>
                    
                    <div className="w-1/2">
                    
                        <label className="pl-3" for="totalVenta">Total Venta</label>
                        <input
                            className="rounded-full  h-10 px-2 border border-gray-400 w-full focus:outline-none focus:border-transparent focus:ring focus:ring-principal"
                            type="text"
                            name="totalVenta"
                            id="totalVenta"
                        />
                    </div>
                </div>

                <div className="flex space-x-4 justify-center">

                    <div className="w-1/2 ">
                        <div>
                            <button className="rounded-full my-6 h-10 px-2 borde w-full bg-principal text-white ">Registrar</button>
                        </div>
                    </div>
                </div>

                {/* <div>
                    <label for="address">Current Address</label>
                    <input
                        className="rounded-full  h-10 px-2 border border-gray-400 w-full focus:outline-none focus:border-transparent focus:ring focus:ring-principal"
                        type="text"
                        name="address"
                        id="address"
                    />
                    <p className="text-sm text-gray-600">
                        We will use this as your billing address
                    </p>
                </div> */}


            </form>

        </div>
    );
}

export default RegistroVentas;