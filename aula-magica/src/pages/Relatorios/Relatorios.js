import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';

const Relatorios = () => {

    return (
        <Fragment>
            <Header />
            <h1>Relatórios</h1>
            <p className="description" style={{ textAlignVertical: "center", textAlign: "center", }}>Esta página exibirá os relatórios de todos os seus cursos.</p>
        </Fragment>
    );
}

export default Relatorios;