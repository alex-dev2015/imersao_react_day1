import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CadastroVideo from './pages/cadastro/Video'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Pagina404 = () => (<div>Página 404 </div>)

ReactDOM.render(
  <BrowserRouter>
    
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/" component={App} exact />
      <Route  component={Pagina404}  />

      
    </Switch>
    
  </BrowserRouter>,
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

