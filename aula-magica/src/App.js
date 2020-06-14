import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
// import router from 'react-router-dom';

import Header from './Header'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h3>Bem-vindo(a) à Aula Mágica!</h3>
        <p className="description" style={{ textAlignVertical: "center", textAlign: "center", }}>Uma escola online com jogos e animações para facilitar seu aprendizado.</p>
        <p className="description" style={{ textAlignVertical: "center", textAlign: "center", }}>
          Para baixar nosso aplicativo pela Play Store: 
            <a href="https://play.google.com/store/apps/details?id=com.aulamagica&hl=pt_BR"> Clique aqui!</a>
        </p>
      </Fragment>
    );
  }

}

export default App;
