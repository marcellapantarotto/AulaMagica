import React from 'react';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper blue darken-4">
                <a href="/" className="brand-logo">Aula Mágica</a>
                <ul id="nav-mobile" className="right">
                    <li><a href="/cursos">Cursos</a></li>
                    <li><a href="/gamificacao">Gamificação</a></li>
                    <li><a href="/ia">Inteligência Artificial</a></li>
                    <li><a href="/relatorios">Relatórios</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;