import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import './App.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import { firebaseAuth } from './services/firebase';

function App({ authService }) {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Login 
            authService = {authService}
          />
        </Route>
        <Route path='/maker'>
          <Maker 
            authService = {authService}
          />
        </Route>
      </Switch>

     </BrowserRouter>
    
  );
}

export default App;
