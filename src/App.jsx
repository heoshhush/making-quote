import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({ authService, imageUploader, dataBase }) {
  
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
            imageUploader = {imageUploader}
            dataBase = {dataBase}
          />
        </Route>
      </Switch>

     </BrowserRouter>
    
  );
}

export default App;
