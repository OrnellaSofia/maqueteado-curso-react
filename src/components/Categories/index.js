import React from "react";
import './styles.scss';
import apiRoutes from '../../constants/routes'

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

  render() {
    return(
      <div className="categories">
      <h3>Categorías</h3>
      <p>30.906 resultados</p>
      <h4>Categorías</h4>
      <ul>
    {this.state.categorias.map(categoria => <li>{categoria.name}</li>)}
      </ul>
    </div>
    )
  }
};

export default Categories
