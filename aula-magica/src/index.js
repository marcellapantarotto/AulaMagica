import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/Home/Home';
import Cursos from './pages/Cursos/Cursos';
import Gamificacao from './pages/Gamificacao/Gamificacao';
import InteligenciaArtificial from './pages/InteligenciaArtificial/InteligenciaArtificial';
import Relatorios from './pages/Relatorios/Relatorios';
import NotFound from './pages/NotFound/NotFound';


import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={Home} />
      <Route path='/cursos' exact={true} component={Cursos} />
      <Route path='/gamificacao' exact={true} component={Gamificacao} />
      <Route path='/inteligencia_artificial' exact={true} component={InteligenciaArtificial} />
      <Route path='/relatorios' exact={true} component={Relatorios} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
