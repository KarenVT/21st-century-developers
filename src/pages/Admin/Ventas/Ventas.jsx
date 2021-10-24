import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Ventas = () => {
  const [mostrarLista, setMostrarLista] = useState(true);
  const [ventas, setVentas] = useState([]);
  const [ActualizarDatos, setActualizarDatos] = useState(true);

  useEffect(() => {
    const getVentas = async () => {

      const options = { method: 'GET', url: 'http://localhost:5000/ventas' };

      await axios
        .request(options).then(function (response) {
          console.log(response.data);
          setVentas(response.data);
        }).catch(function (error) {
          console.error(error);
        });
      setActualizarDatos(false);
    };
    if (ActualizarDatos) {
      getVentas();
    }
  }, [ActualizarDatos])

  useEffect(() => {
    //obtener/GET lista de ventas desde el backend

    if (mostrarLista) {
      setActualizarDatos(true);
    }

  }, [mostrarLista]);
  console.log("mostrar:", mostrarLista, ventas);


  return (
    <div className="flex h-auto w-full flex-col items-center justify-start p-10">
      <div className="flex flex-col items-center">
        <h1 className="bg-paleta5 bg-opacity-50 text-4xl m-5 p-5 text-paleta6">
          Área de Administación de Ventas
        </h1>
        {mostrarLista ? (
          <ListVentas listaventas={ventas} setActualizarDatos={setActualizarDatos} setMostrarLista={setMostrarLista}/>
        ) : (
          <RegisVentas
            setMostrarLista={setMostrarLista}
            listaventas={ventas}
            setVentas={setVentas}
          />
        )}
        {/* <ToastContainer position='bottom-center' autoClose={5000} /> */}
      </div>

    </div>
  );
};

const RegisVentas = ({ setMostrarLista, mostrarLista, cambioBoton, setActualizarDatos,  }) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fv = new FormData(form.current);
    ;
    const nuevaVenta = {};
    fv.forEach((value, key) => {
      nuevaVenta[key] = value;
    });

    const options = {
      method: 'POST',
      url: 'http://localhost:5000/ventas',
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
        // toast.success('venta registrada con éxito');
        setActualizarDatos(true);
      }).catch(function (error) {
        console.error(error);
        // toast.error('Error al registrar una Venta');
      });
    setMostrarLista(true)
  };



  return (
    <div className=" flex justify-center items-center">
      <form ref={form} onSubmit={submitForm} className=" bg-white px-6 py-3 shadow-2xl">
        <div>
          <h2 className="text-3xl text-center p-5 text-principal ">Registro de Ventas</h2>
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
        <div className="flex justify-center ">
          <div className="w-3/12 px-2">
            <button type="submit" className="boton w-full">
              Registrar
            </button>
          </div>
          <div className="w-3/12 px-2">
            <button
              onClick={() => {
                setMostrarLista(!mostrarLista)
              }}
              className="boton w-full"
            > Lista de Ventas
            </button>
          </div>

        </div>
      </form>
    </div>
  )
};

const ListVentas = ({ listaventas, setActualizarDatos, setMostrarLista, cambioBoton, mostrarLista }) => {

  const [buscador, setBuscador] = useState('');
  const [filtroVentas, setFiltroVentas] = useState(listaventas);

  useEffect(() => {
    setFiltroVentas(
      listaventas.filter(elemento => {
        console.log('elemento', elemento);
        return JSON.stringify(elemento).toLowerCase().includes(buscador.toLowerCase());
      })
    );
  }, [buscador, listaventas]);

  return (
    <>
      <div className='bg-white px-6 py-3 shadow-2xl'>
        <div>
          <h2 className='text-3xl text-center p-5 text-principal '>Listado de Ventas</h2>
        </div>
        <div className='flex justify-around items-center'>

        <div >
          <input
            value={buscador}
            onChange={(e) => setBuscador(e.target.value)}
            type='text'
            className='rounded-full h-10 w-full p-2 m-2 border border-gray-400  focus:outline-none focus:border-transparent focus:ring focus:ring-principal shadow-lg'
            placeholder='Burcar Venta'
          />
        </div>
        <div className="w-2/12  ">
            <button
              onClick={() => {
                setMostrarLista(mostrarLista)
              }}
              className="boton w-full"
            > Registrar Venta
            </button>
          </div>
        </div>
        <table className='tabla'>
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
              filtroVentas.map((ventas) => {
                return (
                  <EditarVenta key={nanoid()} ventas={ventas} setActualizarDatos={setActualizarDatos} />
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
};

const EditarVenta = ({ ventas, setActualizarDatos }) => {

  const [editar, setEditar] = useState(false);
  const [datosVentaEditada, setDatosVentaEditada] = useState({
    id: ventas.id,
    fecha: ventas.fecha,
    idProducto: ventas.idProducto,
    nombreProducto: ventas.nombreProducto,
    idCliente: ventas.idProducto,
    cantidadProducto: ventas.cantidadProducto,
    nombreCliente: ventas.nombreCliente,
    precioUnitario: ventas.precioUnitario,
    nombreVendedor: ventas.nombreVendedor,
    totalVenta: ventas.totalVenta
  });

  const editarVenta = async () => {
    // Patch - editar datos - Enviar al Backend
    const options = {
      method: 'PATCH',
      url: `http://localhost:5000/ventas/${ventas._id}`,
      headers: { 'Content-Type': 'application/json' },
      data: { ...datosVentaEditada}
    };

    await axios
      .request(options).then(function (response) {
        console.log(response.data);
        setEditar(false);
        setActualizarDatos(true)
      }).catch(function (error) {
        console.error(error);
      });
    console.log('editados:', datosVentaEditada);
  }

  const eliminarVenta = async () => {

    const options = {
      method: 'DELETE',
      url: `http://localhost:5000/ventas/${ventas._id}`,
      headers: { 'Content-Type': 'application/json' }
    };

    await axios
      .request(options).then(function (response) {
        console.log(response.data);
        setActualizarDatos(true);
      }).catch(function (error) {
        console.error(error);
      });
  }

  return (
    <tr>

      {
        // campos para editar los datos de Ventas ya registrados
        editar ? (
          <>
            <td><input name='id' type="number" className='input'
              value={datosVentaEditada.id}
              onChange={(e) => setDatosVentaEditada({ ...datosVentaEditada, id: e.target.value })}
            />
            </td>
            <td><input name='fecha' type="date" className='input'
              value={datosVentaEditada.fecha}
              onChange={(e) => setDatosVentaEditada({ ...datosVentaEditada, fecha: e.target.value })}
            />
            </td>
            <td><input name='idProducto' type="number" className='input'
              value={datosVentaEditada.idProducto}
              onChange={(e) => setDatosVentaEditada({ ...datosVentaEditada, idProducto: e.target.value })}
            />
            </td>
            <td><input name='nombreProducto' type="text" className='input'
              value={datosVentaEditada.nombreProducto}
              onChange={(e) => setDatosVentaEditada({ ...datosVentaEditada, nombreProducto: e.target.value })}
            /></td>
            <td><input name='idCliente' type="number" className='input'
              value={datosVentaEditada.idCliente}
              onChange={(e) => setDatosVentaEditada({ ...datosVentaEditada, idCliente: e.target.value })}
            /></td>
            <td><input name='nombreCliente' type="text" className='input'
              value={datosVentaEditada.nombreCliente}
              onChange={(e) => setDatosVentaEditada({ ...datosVentaEditada, nombreCliente: e.target.value })}
            />
            </td>
            <td><input name='cantidadProducto' type="number" className='input'
              value={datosVentaEditada.cantidadProducto}
              onChange={(e) => setDatosVentaEditada({ ...datosVentaEditada, cantidadProducto: e.target.value })}
            />
            </td>
            <td><input name='precioUnitario' type="number" className='input'
              value={datosVentaEditada.precioUnitario}
              onChange={(e) => setDatosVentaEditada({ ...datosVentaEditada, precioUnitario: e.target.value })}
            />
            </td>
            <td><input name='nombreVendedor' type="text" className='input'
              value={datosVentaEditada.nombreVendedor}
              onChange={(e) => setDatosVentaEditada({ ...datosVentaEditada, nombreVendedor: e.target.value })}
            />
            </td>
            <td><input name='totalVenta' type="number" className='input'
              value={datosVentaEditada.totalVenta}
              onChange={(e) => setDatosVentaEditada({ ...datosVentaEditada, totalVenta: e.target.value })}
            />
            </td>
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

      <td className="bg-paleta3">
        <div className="flex w-full justify-around ">
          {
            editar ? (
              <i
                onClick={() => { editarVenta() }}
                className="fas fa-check-square" />

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


