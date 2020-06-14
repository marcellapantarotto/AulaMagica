import React, { Fragment } from 'react';
import Header from './Header';

const Gamificacao = () => {

    return (
        <Fragment>
            <Header />
            <h3>Gamificação</h3>
            <p className="description">Do inglês gamification, é o uso de mecânicas e características de jogos para engajar, motivar comportamentos e facilitar o aprendizado de pessoas em situações reais, normalmente não relacionados a jogos. É utilizar a lógica e as metodologias dos games para servir a outros propósitos, como tornar conteúdos complexos em materiais mais acessíveis, facilitando os processos de aprendizado — tudo isso de forma mais dinâmica do que outros métodos.</p>
            <p className="fonte">Fonte: <a href="https://www.ludospro.com.br/blog/o-que-e-gamificacao">Clique aqui!</a></p>
        </Fragment>
    );
}

export default Gamificacao;