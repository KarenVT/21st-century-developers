import './styles/styles.css';
import Registro from './pages/Registro_login/Registro';
import Login from './pages/Registro_login/Login';
import Admin from './pages/Admin/IndexAdmin';
import Adminusuario from './pages/Admin/AdminUsuarios/Adminusuario';
import Index from './pages/Home/Index';
import PublicLayout from './layouts/PublicLayout';
import AutenticacionLayaut from './layouts/AutenticacionLayaut';
import PrivateLayaut from './layouts/PrivateLayaut';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ventas from './pages/Admin/Ventas/Ventas';
import { RegistroProducto } from './pages/Admin/Productos/RegistroProductos';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/Admin', '/Admin/Ventas', '/Admin/RegistroProductos','/Adminusuario']}>
          <PrivateLayaut>
            <Switch>
              <Route path='/Admin/AdminUsuarios'>
                <Adminusuario />
              </Route>
              <Route path='/Admin/RegistroProductos'>
                <RegistroProducto />
              </Route>
              <Route path='/Admin/Ventas'>
                <Ventas />
              </Route>
              <Route path='/Admin'>
                <Admin />
              </Route>
            </Switch>
          </PrivateLayaut>
        </Route>
        <Route path={['/Login', '/Registro']}>
          <AutenticacionLayaut>
            <Switch>
              <Route path='/Login'>
                <Login />
              </Route>
              <Route path='/Registro'>
                <Registro />
              </Route>
            </Switch>
          </AutenticacionLayaut>
        </Route>
        <Route path={['/']}>
          <PublicLayout>
            <Switch>
              <Route path='/'>
                <Index />
              </Route>
            </Switch>
          </PublicLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
