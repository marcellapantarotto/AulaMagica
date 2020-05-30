import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import Header from './Header'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h3 style={{textAlignVertical: "center",textAlign: "center",}}>Bem-vindo(a) à Aula Mágica!</h3>
        <p style={{textAlignVertical: "center",textAlign: "center",}}>Uma escola online com jogos e animações para facilitar seu aprendizado.</p>
      </Fragment>
    );
  }

}

export default App;
