import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import Header from './Header'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h1>Bem-vindo(a) à Aula Mágica!</h1>
      </Fragment>
    );
  }

}

export default App;
