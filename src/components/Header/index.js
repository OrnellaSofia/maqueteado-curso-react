import React from 'react';
import logo from '../../logo.png';
import './styles.scss';

class Header extends React.Component {
    constructor(props){
      super(props)
      this.state = { 
        categorias: []
      }
    }

    handleReload(){
        window.location.reload()
    }

    render(){
        return(
            <header className="header">
            <img onClick={this.handleReload} src={logo} className="logo" alt="logo" />
            <div className="div-search-bar">
                <input type="text" className="search-bar" placeholder="Buscar productos, marcas y más..."/>
            </div>
        </header>
        )
    }
}

export default Header
