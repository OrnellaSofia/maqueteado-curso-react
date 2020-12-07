import React from "react";
import './styles.scss';

const Product = (props) => (
    <div className="one-product">
      <img src={props.link} />
      <div className="product-text">
        <div className="price">{props.price}</div>
        <div className="discount">Hasta 6 cuotas sin interés</div>
        <div><span className="shipping">Llega gratis mañana</span></div>
        <div className="description">{props.description}</div>
      </div>
    </div>
);

export default Product
