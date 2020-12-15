import React from "react";
import './styles.scss';
import apiRoutes from '../../constants/routes'
import Product from '../Product'
import ReactDOMServer from 'react-dom/server';

class Categories extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      categorias: []
    }
  }

  componentDidMount(){
    fetch(apiRoutes.apiCategorias)
      .then(res => res.json())
      .then(data => {
        this.setState({
          categorias: data
        })
      })
      .catch(err => console.log("Error: " + err))
  }

  handleOnClick = (id) => {
    fetch(apiRoutes.categorieItems + id)
     .then(res => res.json())
     .then(data => {
        document.querySelector(".products").innerHTML = 
        ReactDOMServer.renderToString( data.results.map(item => 
        <Product
          price = {`$ ` + item.price}
          description = {item.title}
          link = {item.thumbnail}
           />))
     })
     .catch(err => console.log("Error: " + err))
  }

  render() {
    return(
      <div className="categories">
      <h3>Categorías</h3>
      <p>30.906 resultados</p>
      <h4>Categorías</h4>
      <ul>
        {this.state.categorias.map(categoria => <li key={categoria.id} onClick={() => this.handleOnClick(categoria.id)}>{categoria.name}</li>)}
      </ul>
    </div>
    )
  }
};

export default Categories
