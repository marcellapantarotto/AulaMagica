import React from 'react';
import logo from './aulamagica_logo.svg';
import './App.css';

const Header = () => {
    return (
        <nav>
            <div id="menu_header" className="nav-wrapper">
            <img src={logo} className="logo_img" alt="logo" />
            <a href="/" id="logo_name" className="brand-logo" >Aula Mágica</a>
                <ul id="nav-mobile" className="right">
                    <li className="menu_options"><a href="/cursos">Cursos</a></li>
                    <li className="menu_options"><a href="/gamificacao">Gamificação</a></li>
                    <li className="menu_options"><a href="/ia">Inteligência Artificial</a></li>
                    <li className="menu_options"><a href="/relatorios">Relatórios</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;