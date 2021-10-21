import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Ventas = () => {
  const [mostrarLista, setMostrarLista] = useState(true);
  const [ventas, setVentas] = useState([]);
  const [cambioBoton, setCambioBoton] = useState('Crear Nuevo Vehículo');

  useEffect(() => {
    //obtener/GET lista de ventas desde el backend

    const getVentas = async () => {
      // const getVentas = async () => {

      const options = { method: 'GET', url: 'http://localhost:5000/ventas' };

      axios.request(options).then(function (response) {
        console.log(response.data);
        setVentas(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }

    if (mostrarLista) {
      getVentas();
    }

  }, [mostrarLista]);
  console.log("mostrar:", mostrarLista, ventas);

  useEffect(() => {
    return () => {
      if (mostrarLista) {
        setCambioBoton('Ver lista de Ventas');
      } else {
        setCambioBoton('Registrar Venta');
      }
    }
  }, [mostrarLista]);
  return (
    <div className="flex h-full w-full flex-col items-center justify-start p-10">
      <div className="flex flex-col items-center">
        <h1 className="bg-paleta5 bg-opacity-50 text-4xl m-5 p-5 text-paleta6">
          Área de Administación de Ventas
        </h1>
        {mostrarLista ? (
          <ListVentas listaventas={ventas} />
        ) : (
          <RegisVentas
            setMostrarLista={setMostrarLista}
            listaventas={ventas}
            setVentas={setVentas}
          />
        )}
        <ToastContainer position='bottom-center' autoClose={5000} />
      </div>
      <button
        onClick={() => {
          setMostrarLista(!mostrarLista)
        }}
        className=" rounded-full h-10 w-2/6 mt-5 bg-paleta2 bg-opacity-80 text-paleta6 shadow-lg"
      >
        {cambioBoton}
      </button>
    </div>
  );
};

const RegisVentas = ({ setMostrarLista, listaventas, ventas }) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fv = new FormData(form.current);

    const nuevaVenta = {};
    fv.forEach((value, key) => {
      nuevaVenta[key] = value;
    });

    const options = {
      method: 'POST',
      url: 'http://localhost:5000/ventas/nuevo',
      headers: { 'Content-Type': 'application/json' },
      data: {
        id: nuevaVenta.id,
        fecha: nuevaVenta.fecha,
        idProducto: nuevaVenta.idProducto,
        nombreProducto: nuevaVenta.nombreProducto,
        idCliente: nuevaVenta.idCliente,
        cantidadProducto: nuevaVenta.cantidadProducto,
        nombreCliente: nuevaVenta.nombreCliente,
        precioUnitario: nuevaVenta.precioUnitario,
        nombreVendedor: nuevaVenta.nombreVendedor,
        totalVenta: nuevaVenta.totalVenta
      }
    };

    await axios
      .request(options).then(function (response) {
        console.log(response.data);

        toast.success('venta registrada con éxito');
        // toast.success('venta registrada con éxito');

      }).catch(function (error) {
        console.error(error);
        // toast.error('Error al registrar una Venta');
      });

    setMostrarLista(true);
  };

  return (
    <div className=" flex justify-center items-center">
      <form ref={form} onSubmit={submitForm} className=" bg-white px-6 py-3 shadow-2xl">
        <div>
          <h2 className="text-3xl text-center pb-10 text-principal ">Registro de Ventas</h2>
        </div>
        <div className="flex space-x-4 mb-3">
          <div className="w-1/2">
            <label className="pl-3" htmlFor="id">Identificador</label>
            <input
              className="input"
              type="number"
              name="id"
              required
            />

          </div>
          <div className="w-1/2">
            <label className="pl-3" htmlFor="fecha">Fecha</label>
            <input
              className="input"
              type="date"
              name="fecha"
              required
            />
          </div>
        </div>
        <div className="flex space-x-4 mb-3">
          <div className="w-1/2">
            <label className="pl-3" htmlFor="idProducto">Id Producto</label>
            <input
              className="input"
              type="number"
              name="idProducto"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="pl-3" htmlFor="nombreProducto">Nombre Producto</label>
            <input
              className="input"
              type="text"
              name="nombreProducto"
              required
            />
          </div>
        </div>
        <div className="flex space-x-4 mb-3">
          <div className="w-1/2">
            <label className="pl-3" htmlFor="idCliente">Id Cliente</label>
            <input
              className="input"
              type="number"
              name="idCliente"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="pl-3" htmlFor="cantidadProducto">Cantidad Producto</label>
            <input
              className="input"
              type="number"
              name="cantidadProducto"
              required
            />
          </div>
        </div>
        <div className="flex space-x-4 mb-3">
          <div className="w-1/2">
            <label className="pl-3" htmlFor="nombreCliente">Nombre Cliente</label>
            <input
              className="input"
              type="text"
              name="nombreCliente"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="pl-3" htmlFor="precioUnitario">Precio unitario</label>
            <input
              className="input"
              type="number"
              name="precioUnitario"
              required
            />
          </div>
        </div>
        <div className="flex space-x-4 mb-3">
          <div className="w-1/2">
            <label className="pl-3" htmlFor="nombreVendedor">Nombre Vendedor</label>
            <input
              className="input"
              type="text"
              name="nombreVendedor"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="pl-3" htmlFor="totalVenta">Total Venta</label>
            <input
              className="input"
              type="number"
              name="totalVenta"
              required
            />
          </div>
        </div>
        <div className="flex space-x-4 justify-center">
          <div className="w-1/4 ">
            <div>
              <button type="submit" className="boton my-6 w-full">
                Registrar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
};

const ListVentas = ({ listaventas }) => {

  const form = useRef(null);


  useEffect(() => {
    console.log('este es el listado de ventas en el componente de tabla', listaventas);
  }, [listaventas]);

  const editarFila = async (e) => {
    e.preventDefault();
    console.log(e);
    const fe = new FormData(form.current);

    const editarVenta = {};
    fe.forEach((value, key) => {
      editarVenta[key] = value;
    });
    console.log('venta actualizada:', editarVenta);
    const options = {
      method: 'PATCH',
      url: 'http://localhost:5000/ventas/editar',
      headers: { 'Content-Type': 'application/json' },
      data: {
        id: editarVenta._id,
        fecha: editarVenta.fecha,
        idProducto: editarVenta.idProducto,
        nombreProducto: editarVenta.nombreProducto,
        idCliente: editarVenta.idCliente,
        cantidadProducto: editarVenta.cantidadProducto,
        nombreCliente: editarVenta.nombreCliente,
        precioUnitario: editarVenta.precioUnitario,
        nombreVendedor: editarVenta.nombreVendedor,
        totalVenta: editarVenta.totalVenta
      }
    };

    await axios
      .request(options).then(function (response) {
        console.log(response.data);
        // toast.success('venta editada con éxito');
      }).catch(function (error) {
        console.error(error);
        // toast.error('Error al registrar una Venta');
      });
    console.log('ventas:', editarVenta);
  };
  return (
    <>
      <div className="bg-white px-6 py-3 shadow-2xl">
        <div>
          <h2 className="text-3xl text-center pb-10 text-principal ">Listado de Ventas</h2>
        </div>
        <form ref={form} onSubmit={editarFila}>
          <table className="tabla">

            <thead>
              <tr>
                <th >Id</th>
                <th >Fecha</th>
                <th >Id Producto</th>
                <th >Nombre Producto</th>
                <th >Id Cliente</th>
                <th >Nombre Cliente</th>
                <th >Cantidad Producto</th>
                <th >Precio Unitario</th>
                <th >Nombre Vendedor</th>
                <th >Total Venta</th>
                <th >Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                listaventas.map((ventas) => {
                  return (
                    <EditarVenta key={nanoid()} ventas={ventas} />
                  )
                })
              }
            </tbody>
          </table>
        </form>
      </div>
    </>
  )
};

const EditarVenta = ({ ventas }) => {

  const [editar, setEditar] = useState(false);


  const eliminarVenta = async () => {

const options = {
  method: 'DELETE',
  url: 'http://localhost:5000/ventas/eliminar',
  headers: { 'Content-Type': 'application/json' },
  data: { id: ventas._id }
};

await axios
  .request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}

  return (
    <tr>

      {
        editar ? (
          <>
            <td><input name='id' type="number" className='input' defaultValue={ventas.id} /></td>
            <td><input name='fecha' type="date" className='input' defaultValue={ventas.fecha} /></td>
            <td><input name='idProducto' type="number" className='input' defaultValue={ventas.idProducto} /></td>
            <td><input name='nombreProducto' type="text" className='input' defaultValue={ventas.nombreProducto} /></td>
            <td><input name='idCliente' type="number" className='input' defaultValue={ventas.idCliente} /></td>
            <td><input name='cantidadProdcuto' type="number" className='input' defaultValue={ventas.cantidadProducto} /></td>
            <td><input name='nombreCliente' type="text" className='input' defaultValue={ventas.nombreCliente} /></td>
            <td><input name='precioUnitario' type="number" className='input' defaultValue={ventas.precioUnitario} /></td>
            <td><input name='nombreVendedor' type="text" className='input' defaultValue={ventas.nombreVendedor} /></td>
            <td><input name='totalVenta' type="number" className='input' defaultValue={ventas.totalVenta} /></td>
          </>
        ) : (
          <>
            <th>{ventas.id}</th>
            <td>{ventas.fecha}</td>
            <td>{ventas.idProducto}</td>
            <td>{ventas.nombreProducto}</td>
            <td>{ventas.idCliente}</td>
            <td>{ventas.nombreCliente}</td>
            <td>{ventas.cantidadProducto}</td>
            <td>{ventas.precioUnitario}</td>
            <td>{ventas.nombreVendedor}</td>
            <td>{ventas.totalVenta}</td>
          </>
        )
      }

      <td className="bg-paleta5">
        <div className="flex w-full justify-around ">
          {
            editar ? (

              <button type='submit'>
                <i

                  onClick={() => { setEditar(!editar) }}

                  className="fas fa-check-square"></i>
              </button>

            ) : (
              <i
                onClick={() => { setEditar(!editar) }}
                className="fas fa-edit" />
            )
          }

          <i onClick={() => { eliminarVenta() }} className="fas fa-trash" />
        </div>
      </td>
    </tr>
  );

};



export default Ventas;



