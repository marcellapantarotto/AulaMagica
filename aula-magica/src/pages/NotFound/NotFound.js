import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';

const NotFound = () => {

    return (
        <Fragment>
            <Header />
            <h1>Página Não Encontrada!</h1>
            <p className="description" style={{ textAlignVertical: "center", textAlign: "center", }}>A página que você está procurando não existe.
                <br />Por favor, selecione alguma opção de nosso menu.</p>
        </Fragment>
    );
}

export default NotFound;