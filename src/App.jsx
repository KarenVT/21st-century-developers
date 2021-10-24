import './styles/styles.css';
import Registro from './pages/RegistroLogin/Registro';
import Login from './pages/RegistroLogin/Login';
import Admin from './pages/Admin/IndexAdmin';
import Index from './pages/Home/Index';
import PublicLayout from './layouts/PublicLayout';
import AutenticacionLayaut from './layouts/AutenticacionLayaut';
import PrivateLayaut from './layouts/PrivateLayaut';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ventas from './pages/Admin/Ventas/Ventas';
import Productos from './pages/Admin/Productos/Productos';
import Roles from './pages/Admin/Roles/Roles';
import { Auth0Provider } from "@auth0/auth0-react";


function App() {
  return (
    <Auth0Provider
     domain="misiontic-modaexpress.us.auth0.com"
    clientId="lBgjMzJEBs4GZS9XP7FQ27iJw7kYDe4j"
    redirectUri={window.location.origin}
    >
    <Router>
      <Switch>
        <Route path={['/Admin', '/Admin/Ventas', '/Admin/Productos', '/Admin/Ventas/IndexAdmin', '/Roles']}>
          <PrivateLayaut>
            <Switch>
              <Route path='/Roles'>
                <Roles />
              </Route>
              <Route path="/Admin/Ventas/IndexAdmin">
                <Admin />
              </Route>
              <Route path='/Admin/Productos'>
                <Productos />
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
    </Auth0Provider>
  );
}

export default App;
