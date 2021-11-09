import './styles/styles.css';
import Admin from './pages/Admin/IndexAdmin';
import Index from './pages/Home/Index';
import PublicLayout from './layouts/PublicLayout';
import PrivateLayaut from './layouts/PrivateLayaut';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ventas from './pages/Admin/Ventas/Ventas';
import Productos from './pages/Admin/Productos/Productos';
import Roles from './pages/Admin/Roles/Roles';
import { Auth0Provider } from "@auth0/auth0-react";
import Usuarios from './pages/Admin/Usuarios/Usuarios';
import { UserContext } from './context/userContext';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [userData, setUserData] = useState({});
  return (
    <Auth0Provider
      domain="misiontic-modaexpress.us.auth0.com"
      clientId="lBgjMzJEBs4GZS9XP7FQ27iJw7kYDe4j"
      // aqui se agrega la audiencia para poder pedir el token
      audience="api-autenticacion"
      redirectUri={window.location.origin}
    >
      <div className="app">
        <UserContext.Provider value={{ userData, setUserData }}>
          <Router>
            <Switch>
              <Route path={['/Admin', '/Admin/Ventas', '/Admin/Productos', '/Roles', '/Admin/Usuarios']}>
                <PrivateLayaut>
                  <Switch>
                    <Route path='/Roles'>
                      <Roles />
                    </Route>

                    <Route path='/Admin/Productos'>
                      {/* poner una ruta privada */}
                      <PrivateRoute roleList={["admin"]}>
                        <Productos />
                      </PrivateRoute>
                    </Route>
                    <Route path='/Admin/Ventas'>
                      <PrivateRoute roleList={["admin", "vendedor"]}>
                        <Ventas />
                      </PrivateRoute>
                    </Route>
                    <Route path='/Admin/Usuarios'>
                      {/* poner una ruta privada */}
                      <PrivateRoute roleList={["admin"]}>
                        <Usuarios />
                      </PrivateRoute>
                    </Route>
                    <Route path='/Admin'>
                      <PrivateRoute roleList={["admin"]}>
                        <Admin />
                      </PrivateRoute>
                    </Route>

                  </Switch>
                </PrivateLayaut>
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
        </UserContext.Provider>
      </div>

    </Auth0Provider>
  );
}

export default App;
