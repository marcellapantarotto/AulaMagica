import React, { Fragment } from 'react';
import Header from './Header';

const NotFound = () => {

    return (
        <Fragment>
            <Header />
            <h3>Página Não Encontrada!</h3>
            <p className="description" style={{ textAlignVertical: "center", textAlign: "center", }}>A página que você está procurando não existe.
                <br />Por favor, selecione alguma opção de nosso menu.</p>
        </Fragment>
    );
}

export default NotFound;