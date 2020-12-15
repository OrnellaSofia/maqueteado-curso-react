import React from 'react';
import logo from '../../logo.png';
import './styles.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import apiRoutes from '../../constants/routes';
import Product from '../Product'
import ReactDOMServer from 'react-dom/server';

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

    handleSearch(){
        let searchName = document.querySelector(".search-bar").value
        fetch(apiRoutes.searchByName + searchName)
        .then(res => res.json())
        .then(data => {
           document.querySelector(".products").innerHTML = 
           ReactDOMServer.renderToString( data.results.map(item => 
           <Product
             price = {`$ ` + item.price}s
             description = {item.title}
             link = {item.thumbnail}
              />))
        })
        .catch(err => console.log("Error: " + err))
    }

    render(){
        return(
            <header className="header">
            <img onClick={this.handleReload} src={logo} className="logo" alt="logo" />
            <div className="div-search-bar">
                <input type="text" className="search-bar" placeholder="Buscar productos, marcas y más..."/>
                <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={this.handleSearch}/>
            </div>
        </header>
        )
    }
}

export default Header
