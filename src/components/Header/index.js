import React from 'react';
import logo from '../../logo.png';
import './styles.scss';

const Header = () => (
    <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <div className="div-search-bar">
            <input type="text" className="search-bar" placeholder="Buscar productos, marcas y más..."/>
        </div>
    </header>
)

export default Header
