import React from 'react';
import logo from '../../images/aulamagica_logo.svg';
import '../../pages/Home/Home.css';
import LinkWrapper from '../../utils/LinkWrapper';

const Header = () => {
    return (
        <nav>
            <div id="menu_header" className="nav-wrapper">
                <img src={logo} className="logo_img" alt="logo" />
                {/* <LinkWrapper to="/" id="logo_name" className="brand-logo" activeStyle={{}}>Aula Mágica</LinkWrapper> */}
                <LinkWrapper to="/" id="logo_name" className="brand-logo">Aula Mágica</LinkWrapper>
                <ul id="nav-mobile" className="right">
                    <li className="menu_options"><LinkWrapper to="/cursos">Cursos</LinkWrapper></li>
                    <li className="menu_options"><LinkWrapper to="/gamificacao">Gamificação</LinkWrapper></li>
                    <li className="menu_options"><LinkWrapper to="/inteligencia_artificial">Inteligência Artificial</LinkWrapper></li>
                    <li className="menu_options"><LinkWrapper to="/relatorios">Relatórios</LinkWrapper></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;