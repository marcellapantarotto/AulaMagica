import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './Home.css';
// import router from 'react-router-dom';

import Header from '../../components/Header/Header'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h1>Bem-vindo(a) à Aula Mágica!</h1>
        <p className="description" style={{ textAlignVertical: "center", textAlign: "center", }}>Uma escola online com jogos e animações para facilitar seu aprendizado.</p>
        <p className="description" style={{ textAlignVertical: "center", textAlign: "center", }}>
          Para baixar nosso aplicativo pela Play Store:
            <a href="https://play.google.com/store/apps/details?id=com.aulamagica&hl=pt_BR"> Clique aqui!</a>
        </p>
        {/* <br></br>
        <hr></hr>

        <h3>Imagens:</h3>
        <img src="https://lh3.googleusercontent.com/gfUa_aTxEjxx5ZFe6n3i5Cut3O-eEphMq5EonunEcFdDfhyneYMSiVOmszfgBZ_3F7w=w1360-h664-rw" alt="app images" ></img> */}
      </Fragment>
    );
  }

}

export default Home;
