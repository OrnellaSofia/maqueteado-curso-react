import React from "react";
import './styles.scss';

class VistaProducto extends React.Component {
    constructor(props){
      super(props)
      this.state = { 
        categorias: []
      }
    }
    render(){
        return (
            <div className="product-container">

            </div>
        )
    }
}

export default VistaProducto
