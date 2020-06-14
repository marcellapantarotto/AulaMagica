import React, { Fragment } from 'react';
import Header from './Header';

const Cursos = () => {

    return (
        <Fragment>
            <Header />
            <h3>Cursos</h3>
            <p className="description" style={{ textAlignVertical: "center", textAlign: "center", }}>Temos uma gama de cursos os quais você pode se inscrever!</p>
        </Fragment>
    );
}

export default Cursos;