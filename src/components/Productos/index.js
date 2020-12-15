import React from "react";
import './styles.scss';
import Product from '../Product'
import Categories from '../Categories'

class Productos extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        items: []
      }
    }

    render(){
        return(
        <div className="content">
            <Categories />
                <div className="products">

                </div>
        </div>
        )
    }
}

export default Productos