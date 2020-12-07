import './styles.scss';
import React from 'react';

class Formulario extends React.Component {
    constructor(props){
        super(props)
        this.state = { name: "", price:"", description: "" }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
    return( 
    <div>
        <h1>Formulario de contacto</h1>
        Nombre <br/>
        <input name="name" value={this.state.name} onChange={this.handleChange}></input> <br/>
        Precio <br/>
        <input name="price" value={this.state.price} onChange={this.handleChange}></input> <br/>
        Descripción <br/>
        <input name="description" value={this.state.description} onChange={this.handleChange}></input> <br/>

    </div>
    )
    }
  }
  
  export default Formulario;
  