import './App.css';
import './styles/styles.css';
import Registro from './pages/Registro';
import Login from './pages/Login';
import Admin from './pages/Admin/IndexAdmin';
import Index from './pages/Index';
import PublicLayout from './layouts/PublicLayout';
import AutenticacionLayaut from './layouts/AutenticacionLayaut';
import PrivateLayaut from './layouts/PrivateLayaut';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ventas from './pages/Admin/Ventas';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/Admin', "/Admin/Ventas"]}>
          <PrivateLayaut>
            <Switch>
              <Route path='/admin/ventas'>
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
