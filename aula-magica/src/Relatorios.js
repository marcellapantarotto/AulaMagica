import React, { Fragment } from 'react';
import Header from './Header';

const Relatorios = () => {

    return (
        <Fragment>
            <Header />
            <h3>Relatórios</h3>
            <p className="description" style={{ textAlignVertical: "center", textAlign: "center", }}>Esta página exibirá os relatórios de todos os seus cursos.</p>
        </Fragment>
    );
}

export default Relatorios;