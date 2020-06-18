import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';

const InteligenciaArtificial = () => {

    return (
        <Fragment>
            <Header />
            <h1>Inteligência Artificial</h1>
            <p className="description">É a inteligência similar à humana exibida por mecanismos ou software, além de também ser um campo de estudo acadêmico. Os principais pesquisadores e livros didáticos definem o campo como "o estudo e projeto de agentes inteligentes", onde um agente inteligente é um sistema que percebe seu ambiente e toma atitudes que maximizam suas chances de sucesso.</p>
            <p className="fonte">Fonte: <a href="https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_artificial#:~:text=Intelig%C3%AAncia%20artificial%20(por%20vezes%20mencionada,um%20campo%20de%20estudo%20acad%C3%AAmico.">Clique aqui!</a></p>
        </Fragment>
    );
}

export default InteligenciaArtificial;