import React from 'react';
import './App.css';
import GestionUsuariosRoles from './components/InterfazRoles/GestionUsuariosRoles';
import RegistroDeVentas from './components/InterfazVentas/RegistroDeVentas';
import RegistroProductos from './components/InterfazProductos/RegistroProductos';
import Ventas from './components/InterfazVentas/Ventas';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Acceso from './components/Acceso';




function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Acceso}/>
        <Route exact path="/registroventas" component={RegistroDeVentas} />
        <Route exact path="/registroproductos" component={RegistroProductos} />
        <Route exact path="/ventas" component={Ventas} />
        <Route exact path="/roles" component={GestionUsuariosRoles} />
      </Router>
    </div>
  );
}

export default App;
