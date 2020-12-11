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
              <div className="picture">
                <img src="https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/2/4/242D3PA-1_T1599447323.png"></img>
              </div>
              <div className="information">
                <div className="name">Notebook HP i5 8GB</div>
                <div className="price">$45.000</div>
                <div className="payment">Pagá en hasta 12 cuotas</div>
                </div>
            </div>
        )
    }
}

export default VistaProducto
