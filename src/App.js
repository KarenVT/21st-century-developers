import React from 'react';
import './sass/index.scss';
import Login from './components/Login/Login'
import RegistroVentas from './components/Ventas/RegistroVentas'
import ListaVentas from './components/Ventas/ListaVentas'
import RegistroProductos from './components/Productos/RegistroProductos'
import ListaProductos from './components/Productos/ListaProductos'
import Roles from './components/roles/GestionUsuarioRoles'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from './components/Generales/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/RegistroVentas" component={RegistroVentas} />
            <Route exact path="/ListaVentas" component={ListaVentas} />
            <Route exact path="/RegistroProductos" component={RegistroProductos} />
            <Route exact path="/ListaProductos" component={ListaProductos} />
            <Route exact path="/Roles" component={Roles} />

            {/* <Route exact path="*" component={NotFoundPage}/> */}
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
