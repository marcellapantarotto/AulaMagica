import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';

const Cursos = () => {

    return (
        <Fragment>
            <Header />
            <h1>Cursos</h1>
            <p className="description" style={{ textAlignVertical: "center", textAlign: "center", }}>Temos uma gama de cursos os quais você pode se inscrever!</p>
        </Fragment>
    );
}

export default Cursos;